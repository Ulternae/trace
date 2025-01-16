import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const baseStyles: string =
  "group text-base flex items-center gap-4 w-full rounded-lg px-4 py-3 transition-colors duration-300 cursor-pointer";
const activeStyles: string =
  "bg-perl-400 dark:bg-liwr-500 text-perl-800 dark:text-liwr-200";
const inactiveStyles: string =
  "text-perl-700 dark:text-liwr-300 hover:bg-perl-400 dark:hover:bg-liwr-500 hover:text-perl-800 dark:hover:text-liwr-200";

const NavigationList = ({
  route,
  icon: Icon,
  name,
}: {
  route: string;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
}) => {
  const { t } = useTranslation();

  return (
    <NavLink
      className={({ isActive }) =>
        `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`
      }
      to={`/${route}`}
    >
      {({ isActive }) => (
        <>
          <Icon
            className={`w-5 h-5 group-hover:fill-perl-800 group-hover:dark:fill-liwr-200 transition-colors duration-300  ${
              isActive
                ? "fill-perl-800 dark:fill-liwr-200"
                : "fill-perl-700 dark:fill-liwr-300"
            }`}
            aria-current={isActive ? "page" : undefined}
            aria-label={t("accessibility.navigateTo", { type: name })}
          />
          <p>{name}</p>
        </>
      )}
    </NavLink>
  );
};

export { NavigationList };
