import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../types";
import { getDataUser } from "../../hooks/getDataUser";
import { useTranslation } from "react-i18next";

const Card = ({ userId }: { userId: string }) => {
  const { users } = useOutletContext<OutletContextType>();
  const { t } = useTranslation()
  const dataUser = getDataUser({ userId, data: users })

  if (!dataUser) return <p className="text-perl-800 dark:text-liwr-200">{t('user.userNotFound')}</p>

  return (
    <div className="bg-red-300">
      <p>asd</p>
    </div>
  );
};

export { Card };
