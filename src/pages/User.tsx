import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { OutletContextType } from "../types";
import { getDataUser } from "../hooks/getDataUser";
import { ViewMessage } from "../components/ViewMessage";
import { CardUserType, RoutesType } from "../enum";
import { ChevronLeftIcon, HeartIcon } from "@heroicons/react/16/solid";
import { ItemsInfo } from "../components/UsersData/ItemsInfo";
import { calculateAge } from "../utils/getAge";
import { UserDataLoading } from "../components/UserData/Loading";

const User = () => {
  const { users, isUsersLoading, usersError } =
    useOutletContext<OutletContextType>();
  const { t } = useTranslation();
  const { user_id } = useParams();

  const navigate = useNavigate();
  const dataUser = getDataUser({ userId: user_id || "", data: users });
  const routeName = t("routes.user");
  const redirectUrl = `/${RoutesType.USERS}`;

  if (isUsersLoading) return <UserDataLoading/>

  if (!dataUser || usersError.error)
    return (
      <ViewMessage
        routeName={routeName}
        message={t("user.informationNotFound")}
        redirect={true}
        redirectUrl={redirectUrl}
      />
    );

  return (
    <section className="py-8 flex flex-col max-w-[800px] gap-y-6 gap-x-7 md:gap-y-12">
      <header className="lg:col-span-full flex gap-4 items-center">
        <ChevronLeftIcon
          className="w-5 h-5 transition-colors duration-300 fill-perl-700 dark:fill-liwr-300 hover:fill-perl-800 hover:dark:fill-liwr-200 cursor-pointer"
          onClick={() => navigate(redirectUrl)}
          aria-label={t("accessibility.goToUsers")}
        />

        <h1 className=" font-bold text-3xl text-perl-800 dark:text-liwr-200">
          {routeName}
        </h1>
      </header>

      <article className="flex flex-col gap-10">
        <div className="flex flex-wrap gap-6">
          <img
            src={dataUser.avatarUrl}
            alt={`${dataUser.firstNames} ${dataUser.lastNames}`}
            className="rounded-lg w-36 h-36 gap-6"
          />
          <div className="flex gap-2 items-end justify-center mb-4">
            <p className="text-perl-800 dark:text-liwr-200 text-2xl">
              {dataUser.firstNames} {dataUser.lastNames}
            </p>
            <HeartIcon
              className={`w-5 h-8  stroke-2 ${
                dataUser.isFavorite
                  ? "fill-perl-800 dark:fill-liwr-200 stroke-perl-800 dark:stroke-liwr-200"
                  : "stroke-perl-700 dark:stroke-liwr-300"
              }`}
              aria-label={
                dataUser.isFavorite
                  ? t("user.favorite")
                  : t("user.notFavorite")
              }
              role="img"
            />
          </div>
        </div>
        <p className="text-perl-800 dark:text-liwr-200 leading-tight">
          {dataUser.description}
        </p>
        <div className="grid xl:grid-cols-2 gap-y-2 gap-x-4">
          {Object.values(CardUserType).map((v) => (
            <ItemsInfo
              name={t(`user.${v}`)}
              key={v}
              value={t(`optionUser.${dataUser[v]}`, {
                defaultValue: dataUser[v],
              })}
            />
          ))}
          <ItemsInfo
            key={crypto.randomUUID()}
            name={t("user.age")}
            value={t("user.yearsOld", {
              age: calculateAge(dataUser.birthDate),
            })}
          />
        </div>
      </article>
    </section>
  );
};

export { User };
