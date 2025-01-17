import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";
import { ThemeType } from "../../enum";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

const ThemeMode = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const stylesIcon: string = "w-5 h-5 transition-colors duration-300 fill-perl-700 dark:fill-liwr-300 group-hover:fill-perl-800 group-hover:dark:fill-liwr-200"
  const isDarkMode = (): boolean => {
    return theme === ThemeType.DARKMODE;
  };

  return (
    <div
      className=" px-4 py-3 transition-colors duration-300 group cursor-pointer flex gap-4"
      onClick={toggleTheme}
    >
      {isDarkMode() ? <MoonIcon className={stylesIcon}/> : <SunIcon className={stylesIcon} />}
      <p className="text-perl-700 dark:text-liwr-300 group-hover:text-perl-800 group-hover:dark:text-liwr-200">
        {t(`theme.${theme}`)}
      </p>
    </div>
  );
};

export { ThemeMode };
