import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/index.js";
import { useUsersData } from "../hooks/useUsersData.js";
import { useUserData } from "../hooks/useUserData.js";

const Home = () => {
  const { user, isLoading: isUserLoading, error: userError } = useUserData();
  const { users, isLoading: isUsersLoading, error: usersError } = useUsersData();  

  return (
    <div className="bg-gradient-to-b from-perl-200 to-perl-400 dark:from-liwr-800 dark:to-black w-full min-h-screen h-auto px-4 pt-20 pb-8 md:pt-8 md:grid grid-cols-[250px_1fr] gap-4 xl:gap-8 2xl:gap-12">
      <div>
        <Sidebar 
          isLoading={isUserLoading}
          dataUser={user}
        />
      </div>
      <Outlet 
        context={{
          users,
          isUsersLoading,
          usersError
        }}
      />
    </div>
  );
};

export { Home };
