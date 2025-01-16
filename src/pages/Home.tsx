import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/index.js";
// import { Logo } from "../icons/Logo.js";
// import { Nav } from "../icons/Nav.js";
// import { Panda } from "../icons/Panda.js";
import { useUsersData } from "../hooks/useUsersData.js";
import { useUserData } from "../hooks/useUserData.js";

const Home = () => {
  const { user, isLoading: isUserLoading, error: userError } = useUserData();
  const { users, isLoading: isUsersLoading, error: usersError } = useUsersData();  
  
  console.log(isUserLoading)
  const action = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="bg-gradient-to-b from-perl-200 to-perl-400 dark:from-liwr-800 dark:to-black w-full h-screen pr-4 py-8 md:grid grid-cols-[320px_1fr] gap-16">
      <div>
        <Sidebar 
          isLoading={isUserLoading}
          dataUser={user}
        />
        <button className="dark:text-white" onClick={action}>
          asdasd
        </button>
        {/* <Nav />
        <Panda />
        <Logo /> */}
      </div>
      <div className="bg-red-400 w-full">
        <p>asd</p>
        <Outlet />
      </div>
    </div>
  );
};

export { Home };
