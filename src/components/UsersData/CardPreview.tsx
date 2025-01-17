import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";
import { usePagination } from "../../hooks/usePagination";
import { User } from "../../interfaces/users";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CardPreview = ({
  className,
  data,
}: {
  className: string;
  data: User[];
}) => {
  const {
    currentPage,
    totalElements,
    elements,
    prevPage,
    nextPage,
    goToPage,
    totalPages,
  } = usePagination({ data, maxItems: 18 });

  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[1] || 'users';
  const { t } = useTranslation();
  const { user_id } = useParams();

  const navigateUser = (id: string) => {
    if (user_id === id) {
      navigate(`/${location}`);
    } else {
      navigate(`/${location}/${id}`);
    }
  };

  const stylesIcon =
    "w-5 h-5 transition-colors duration-300 fill-perl-700 dark:fill-liwr-300 hover:fill-perl-800 hover:dark:fill-liwr-200 cursor-pointer";

  return (
    <section className="grid gap-8" aria-label={t("accessibility.userCards")}>
      <div className={className} role="list">
        {elements.map((user) => {
          const isUserFocused: boolean = user.id === user_id;

          return (
            <div
              className={`group w-60 sm:w-full px-2 py-2 flex gap-4 justify-between rounded-lg transition-colors duration-300 cursor-pointer ${
                isUserFocused
                  ? "bg-perl-600 dark:bg-liwr-500 text-perl-800 dark:text-liwr-200"
                  : "bg-perl-400 dark:bg-liwr-700 hover:bg-perl-600 hover:dark:bg-liwr-500"
              }`}
              onClick={() => navigateUser(user.id)}
              key={user.id}
              role="listitem"
              aria-current={isUserFocused ? "true" : undefined}
            >
              <img
                src={user.avatarUrl}
                alt={`${user.firstNames} ${user.lastNames}`}
                className="min-w-9 min-h-9 max-w-9 max-h-9 object-cover rounded-l- rounded-r-xl"
              />
              <div className="w-full grid items-center">
                <h2
                  className={`leading-none truncate dark:text-liwr-200 text-perl-800 ${
                    isUserFocused
                      ? ""
                      : "group-hover:dark:text-liwr-200 group-hover:text-perl-800"
                  }`}
                >{`${user.firstNames} ${user.lastNames.split(" ")[0]}`}</h2>
                <p
                  className={`leading-none truncate -mt-2 text-sm ${
                    isUserFocused
                      ? "dark:text-liwr-200 text-perl-800"
                      : "dark:text-liwr-300 text-perl-700 group-hover:dark:text-liwr-200 group-hover:text-perl-800"
                  }`}
                >
                  {user.email}
                </p>
              </div>
              <ChevronRightIcon
                className={`min-w-5 max-w-5 min-h-5 transition-colors duration-300 ${
                  isUserFocused
                    ? "fill-perl-800 dark:fill-liwr-200"
                    : "fill-perl-700 dark:fill-liwr-300 group-hover:fill-perl-800 group-hover:dark:fill-liwr-200"
                }`}
                aria-hidden="true"
              />{" "}
            </div>
          );
        })}
      </div>
      <nav
        className="row-start-1 sm:row-start-2"
        aria-label={t("accessibility.pagination")}
      >
        <p className="dark:text-liwr-300 text-perl-800 ">
          {t('user.totalUsers' , {count : totalElements})}
        </p>
        <div className="flex gap-2 items-center justify-center">
          <ChevronDoubleLeftIcon
            className={stylesIcon}
            onClick={() => goToPage(1)}
            aria-label={t("accessibility.firstPage")}
          />
          <ChevronLeftIcon
            className={stylesIcon}
            onClick={prevPage}
            aria-label={t("accessibility.previousPage")}
          />
          <input
            type="number"
            value={currentPage}
            min={1}
            max={totalPages}
            className="w-12 pl-5 bg-perl-400 dark:bg-liwr-700 placeholder:dark:text-liwr-300/50 dark:text-liwr-200 placeholder:text-perl-700/80 text-perl-800 h-full rounded-lg focus:outline-none focus:border-2 focus:border-perl-800 focus:dark:border-liwr-300"
            onChange={(e) => goToPage(Number(e.target.value) || 1)}
            aria-label={t("accessibility.currentPage")}
          />
          <ChevronRightIcon
            className={stylesIcon}
            onClick={nextPage}
            aria-label={t("accessibility.nextPage")}
          />
          <ChevronDoubleRightIcon
            className={stylesIcon}
            onClick={() => goToPage(totalPages)}
            aria-label={t("accessibility.lastPage")}
          />
        </div>
      </nav>
    </section>
  );
};

export { CardPreview };
