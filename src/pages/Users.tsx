import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { OutletContextType } from "../types";
import { UserDataLoading } from "../components/UsersData/Loading";
import { useTranslation } from "react-i18next";
import { Search } from "../components/Search";
import { useFilterCategory } from "../hooks/useFilterCategory";
import { useState } from "react";
import { RoutesType } from "../enum";
import { CardPreview } from "../components/UsersData/CardPreview";
import { Card } from "../components/UsersData/Card";

const Users = () => {
  const { users, isUsersLoading, usersError } =
    useOutletContext<OutletContextType>();
  const { t } = useTranslation();
  const [searchUser, setSearchUser] = useState<string>("");

  const { user_id } = useParams();

  const isRouteFavorite =
    useLocation().pathname.split("/")[1] === RoutesType.FAVORITES;

  const { usersFiltered, currentFilter, setCurrentFilter } = useFilterCategory({
    usersData: users,
    valueFilter: searchUser,
    filterFavoritesOnly: isRouteFavorite,
  });

  console.log({ usersFiltered, currentFilter, setCurrentFilter });

  if (isUsersLoading) return <UserDataLoading />;

  return (
    <div className="py-8 grid grid-cols-1 max-w-[1111px] lg:grid-cols-[330px_1fr] xl:grid-cols-[6fr_6fr_8fr] grid-rows-[auto_auto_auto_1fr] sm:grid-rows-[auto_48px_auto_1fr] lg:grid-rows-[auto_48px_1fr] gap-y-6 gap-x-7 md:gap-y-12">
      <h1 className="lg:col-span-full font-bold text-3xl text-perl-800 dark:text-liwr-200">
        {isRouteFavorite ? t("routes.favorites") : t("routes.users")}
      </h1>

      <Search
        search={searchUser}
        setSearch={setSearchUser}
        setFilter={setCurrentFilter}
        filter={currentFilter}
        className="lg:col-span-full"
      />

    {user_id && <Card userId={user_id}  />
    }
      <div className="sm:grid-cols-2 lg:row-start-3 xl:col-span-2">
        <CardPreview
          className="flex flex-wrap sm:grid lg:flex xl:grid sm:grid-cols-2 gap-x-4 gap-y-3"
          data={usersFiltered}
        />
      </div>
    </div>
  );
};

export { Users };
