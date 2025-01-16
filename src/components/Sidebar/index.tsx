import { useTranslation } from "react-i18next";
import { Logo } from "../../icons/Logo";
import { User } from "../../interfaces/users";
import { SidebarLoading } from "./Loading";
import { NavigationList } from "../Navigation";
import { RoutesType } from "../../enum";
import { UsersIcon } from "@heroicons/react/16/solid";

const Sidebar = ({ isLoading, dataUser }: { isLoading: boolean; dataUser: User | null}) => {
  
  const { t } = useTranslation();

  if (isLoading ) return <SidebarLoading/>

  return (
    <div className="w-auto max-w-80 h-full rounded-2xl grid grid-rows-[auto_2fr_2fr] dark:bg-liwr-600 bg-perl-300 shadow-inner dark:shadow-liwr-800 shadow-perl-700/30 py-10">
      <div className="flex flex-col justify-between gap-12">
        <div className="flex gap-1 px-7">
          <Logo />
          <h1 className="font-bold text-4xl text-perl-800 dark:text-liwr-200">
            {t("global.nameApp")}
          </h1>
        </div>
        <div className="grid grid-cols-[36px_1fr] h-9 gap-3 px-7 mt-2">
          <img className="bg-perl-400 dark:bg-liwr-500 w-9 h-9 rounded-full object-cover" src={dataUser?.avatarUrl}/>
          <div className="flex flex-col justify-center">
            <h1 className="line- text-lg font-bold text-perl-800 dark:text-liwr-200 leading-none">
              {t(`role.${dataUser?.role}`)}
            </h1>
            <p className="text-base text-perl-700 dark:text-liwr-300 leading-none">
              {dataUser?.firstNames}
            </p>
          </div>
        </div>
        <div className="h-1 w-full bg-perl-400 dark:bg-liwr-500 "></div>
      </div>
      <div>
        <NavigationList
          route={RoutesType.USERS}
          name={t('routes.users')}
          icon={UsersIcon}
        />
      </div>
      <div></div>
    </div>
  );
};

export { Sidebar };
