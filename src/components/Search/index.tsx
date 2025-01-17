import { useState, useRef, useEffect  } from "react";
import { FilterUserType } from "../../enum";
import { useTranslation } from "react-i18next";
import { ChevronUpIcon } from "@heroicons/react/16/solid";

const Search = ({
  className = "",
  search,
  setSearch,
  setFilter,
  filter,
}: {
  className?: string;
  search: string;
  filter: FilterUserType;
  setSearch: (value: string) => void;
  setFilter: (value: FilterUserType) => void;
}) => {
  const { t } = useTranslation();

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const newValueSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const toogleOptions = () => setShowOptions((prev) => !prev);

  const handleChangeFilter = ({
    selectedFilter,
    e,
  }: {
    selectedFilter: FilterUserType;
    e: React.MouseEvent;
  }) => {
    e.stopPropagation();
    setFilter(selectedFilter);
    setShowOptions(false);
  };

  return (
    <div
      className={`max-w-[612px] w-full h-20 grid-rows-[3fr_2fr] sm:grid-rows-1 sm:h-12 grid sm:grid-cols-[1fr_168px] ${className}`}
      role="search"
      aria-label={t("accessibility.userSearch")}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder={t('user.searchUser', { category: t(`user.${filter}`).toLowerCase()})}
        className="bg-perl-400 dark:bg-liwr-700 placeholder:dark:text-liwr-300/50 dark:text-liwr-200 placeholder:text-perl-700/80 text-perl-800 h-full rounded-l-lg rounded-tr-lg sm:rounded-tr-none px-4 focus:outline-none focus:border-2 focus:border-perl-800 focus:dark:border-liwr-300"
        onChange={newValueSearch}
        value={search}
        aria-label={t("accessibility.searchInput")}
      />
      <div
        className="group dark:bg-liwr-400 w-full max-w-52 ml-auto sm:max-w-none bg-perl-600 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg relative flex items-center justify-between  cursor-pointer transition-colors duration-300"
        onClick={toogleOptions}
        role="button"
        aria-expanded={showOptions}
        aria-haspopup="listbox"
        aria-label={t("accessibility.toggleFilter")}
      >
        <h2 className="ml-4 dark:text-liwr-300 text-perl-700 group-hover:dark:text-liwr-200 group-hover:text-perl-800">
          {t(`user.${filter}`)}
        </h2>
        <ChevronUpIcon 
          className="w-5 h-5 mr-4 transition-colors duration-300 fill-perl-700 dark:fill-liwr-300 group-hover:fill-perl-800 group-hover:dark:fill-liwr-200"
          aria-hidden="true"
        />
        {showOptions && (
          <div 
            className="absolute grid top-12 w-full sm:top-16 z-10 dark:bg-liwr-400 bg-perl-600 rounded-tl-lg sm:rounded-tl-none rounded-r-lg rounded-bl-lg h-auto px-4 py-5"
            role="listbox"
            aria-label={t("accessibility.filterOptions")}
          >
            {Object.values(FilterUserType).map((v) => (
              <div
                key={v}
                className={` hover:dark:text-liwr-200 hover:text-perl-800 ${
                  v === filter
                    ? "dark:text-liwr-200 text-perl-800"
                    : "dark:text-liwr-300 text-perl-700"
                }`}
                onClick={(e) => handleChangeFilter({ e, selectedFilter: v })}
                role="option"
                aria-selected={v === filter}
                aria-label={t("accessibility.filterOption", { filter: v })}
              >
                <p>{t(`user.${v}`)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { Search };
