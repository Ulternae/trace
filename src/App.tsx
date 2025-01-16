import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<div>Default</div>} />
          <Route path="/users" element={<div>Users List</div>}>
            <Route path=":user_id" element={<div>User ID Mini Detail</div>} />
          </Route>
          <Route path="/user/:user_id" element={<div>User Super Detail</div>} />
          <Route path="/favorites" element={<div>Favorite Users</div>}>
            <Route
              path=":user_id"
              element={<div>Favorite User Mini Detail</div>}
            />
          </Route>
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export { App };
