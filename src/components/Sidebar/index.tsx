import { useTranslation } from "react-i18next";
import { Logo } from "../../icons/Logo";
import { User } from "../../interfaces/users";
import { SidebarLoading } from "./Loading";
import { NavigationList } from "../Navigation";
import { RoutesType } from "../../enum";
import {
  ChartBarIcon,
  ChevronRightIcon,
  HeartIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import { SettingsUser } from "../SettingsUser";
import { ThemeMode } from "../SettingsUser/ThemeMode";
import { Menu } from "../../icons/Menu";
import { useToggleVisibility } from "../../hooks/useToggleVisibility";

const Sidebar = ({
  isLoading,
  dataUser,
}: {
  isLoading: boolean;
  dataUser: User | null;
}) => {
  const { t } = useTranslation();
  const { setRef, showElement, hideElement } = useToggleVisibility();

  if (isLoading) return <SidebarLoading />;

  return (
    <aside
      className="relative"
      aria-label={t("accessibility.sidebarNavigation")}
    >
      <div
        className="hidden absolute md:static -left-4 -top-14 z-20 rounded-r-2xl md:rounded-2xl min-h-[640px] w-auto max-w-60 md:max-w-72 md:h-full md:flex flex-col dark:bg-liwr-600 bg-perl-300 shadow-inner shadow-perl-700/20 pt-10"
        ref={(el) => setRef(el)}
        aria-hidden="false"
      >
        <header
          className="flex flex-col justify-between gap-8"
          aria-label={t('accessibility.appHeader')}
        >
          <div className="flex gap-3 px-7 relative items-center">
            <Logo />
            <h1 className="font-bold text-4xl text-perl-800 dark:text-liwr-200">
              {t("global.nameApp")}
            </h1>
            <button
              className="md:hidden group absolute right-3 w-9 h-9 grid place-content-center cursor-pointer"
              aria-label={t('accessibility.hideSidebar')}
              onClick={hideElement}
            >
              <ChevronRightIcon className="w-5 h-5 fill-perl-700 dark:fill-liwr-300 group-hover:fill-perl-800 group-hover:dark:fill-liwr-200 transition-colors duration-300" />
            </button>
          </div>
          <div
            className="grid grid-cols-[36px_1fr] h-9 gap-3 px-7 mt-2"
            aria-label={t('accessibility.userInformation')}
          >
            <img
              className="bg-perl-400 dark:bg-liwr-500 w-9 h-9 rounded-full object-cover"
              src={dataUser?.avatarUrl}
              alt={dataUser?.firstNames || t("user.avatar")}
            />
            <div className="flex flex-col justify-center">
              <h1
                className="line- text-lg font-bold text-perl-800 dark:text-liwr-200 leading-none"
                aria-label={t('accessibility.userRole')}
              >
                {t(`role.${dataUser?.role}`)}
              </h1>
              <p
                className="text-base text-perl-700 dark:text-liwr-300 leading-none"
                aria-label={t('accessibility.userName')}
              >
                {dataUser?.firstNames}
              </p>
            </div>
          </div>
          <div
            className="h-1 w-full bg-perl-400 dark:bg-liwr-500 mt-2"
            aria-hidden="true"
          />
        </header>

        <nav
          className="py-10 px-7 flex flex-col gap-2"
          aria-label={t("accessibility.mainNavigation")}
        >
          <NavigationList
            route={RoutesType.USERS}
            name={t("routes.users")}
            icon={UsersIcon}
          />
          <NavigationList
            route={RoutesType.FAVORITES}
            name={t("routes.favorites")}
            icon={HeartIcon}
          />
          <NavigationList
            route={RoutesType.METRICS}
            name={t("routes.metrics")}
            icon={ChartBarIcon}
          />
        </nav>

        <div>
          <div
            className="h-1 w-full bg-perl-400 dark:bg-liwr-500"
            aria-hidden="true"
          />
          <div className="py-10 px-7 grid gap-2" aria-label={t('accessibility.userSettings')}>
            <SettingsUser name={t("routes.settings")} />
            <ThemeMode />
          </div>
        </div>
      </div>

      <div
        className="hidden md:hidden absolute bg-perl-800/40 dark:bg-liwr-400/50 z-10 -top-20 -left-4 w-screen h-screen"
        onClick={hideElement}
        ref={(el) => setRef(el)}
        tabIndex={-1}
      />

      <button
        className="cursor-pointer absolute -left-4 -top-12 md:hidden"
        onClick={showElement}
        aria-label={t("accessibility.showSidebar")}
      >
        <Menu />
      </button>
    </aside>
  );
};

export { Sidebar };
