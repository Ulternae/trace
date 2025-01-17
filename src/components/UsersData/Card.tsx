import { useNavigate, useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../types";
import { getDataUser } from "../../hooks/getDataUser";
import { useTranslation } from "react-i18next";
import { ArrowsPointingOutIcon } from "@heroicons/react/20/solid";
import { CardInfoType } from "../../enum";
import { ItemsInfo } from "./ItemsInfo";
import { calculateAge } from "../../utils/getAge";

const Card = ({ userId }: { userId: string }) => {
  const { users } = useOutletContext<OutletContextType>();
  const { t } = useTranslation();
  const dataUser = getDataUser({ userId, data: users });
  const navigate = useNavigate();

  const handleNavigateUser = () => {
    navigate(`/user/${userId}`);
  };

  if (!dataUser)
    return (
      <p className="text-perl-800 dark:text-liwr-200">
        {t("user.userNotFound")}
      </p>
    );

  return (
    <div className="lg:max-w-96 max-h-[700px] bg-perl-300/50 dark:bg-liwr-500 rounded-lg flex flex-col justify-between">
      <div className="py-10 relative flex flex-col gap-16">
        <div className="flex flex-wrap justify-center items-center gap-9 px-4 sm:px-12">
          <img
            src={dataUser.avatarUrl}
            className="w-36 h-36 rounded-full object-cover"
          />
          <span>
            <h1 className="text-2xl leading-none dark:text-liwr-200 text-perl-800">
              {dataUser.firstNames} {dataUser.lastNames}{" "}
            </h1>
            <p className="text-lg leading-none dark:text-liwr-300 text-perl-700">
              {dataUser.email}{" "}
            </p>
          </span>
        </div>
        <div className="grid gap-3">
          {Object.values(CardInfoType).map((v) => (
            <ItemsInfo
              name={t(`user.${v}`)}
              value={t(`optionUser.${dataUser[v]}`, { defaultValue: dataUser[v] })}
              />
          ))}
          <ItemsInfo
            name={t("user.birthDate")}
            value={t("user.yearsOld" , { age: calculateAge(dataUser.birthDate)})}
          />
            
        </div>
        <ArrowsPointingOutIcon
          className="absolute left-4 top-4 w-5 h-5 hover:fill-perl-800 hover:dark:fill-liwr-200 fill-perl-700 dark:fill-liwr-300 transition-colors duration-300 cursor-pointer"
          onClick={handleNavigateUser}
        />
      </div>
      <button
        className="py-4 items-center w-full cursor-pointer bg-perl-500 dark:bg-liwr-400 leading-none dark:text-liwr-200 text-perl-800 rounded-b-lg"
        onClick={handleNavigateUser}
      >
        Ver perfil completo
      </button>
    </div>
  );
};

export { Card };
