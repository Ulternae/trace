import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Users/>} />
          <Route path="/users" element={<Users/>}>
            <Route path=":user_id" element={<Users/>} />
          </Route>
          <Route path="/user/:user_id" element={<div>User Super Detail</div>} />
          <Route path="/favorites" element={<Users/>}>
            <Route
              path=":user_id"
              element={<Users/>}
            />
          </Route>
          <Route path="/metrics" element={<div>Metrics</div>} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export { App };
