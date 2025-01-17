import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { ViewMessage } from "./components/ViewMessage";
import { useTranslation } from "react-i18next";
import { User } from "./pages/User";

const App = () => {
  const { t } = useTranslation();
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Users />} />
          <Route path="/users" element={<Users />}>
            <Route path=":user_id" element={<Users />} />
          </Route>
          <Route
            path="/user"
            element={
              <ViewMessage
                routeName={t("routes.user")}
                message={t("user.searchUserGetInformation")}
                redirect={true}
                redirectUrl="/users"
              />
            }
          ></Route>
          <Route path="/user/:user_id" element={<User/>} />
          <Route path="/favorites" element={<Users />}>
            <Route path=":user_id" element={<Users />} />
          </Route>
          <Route
            path="*"
            element={<ViewMessage message={t("pages.notFound")} />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export { App };
