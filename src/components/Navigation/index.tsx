import React from "react";
import { NavLink } from "react-router-dom";

const NavigationList = ({
  route,
  icon: Icon,
  name,
}: {
  route: string;
  icon: React.ComponentType<{ className?: string}>;
  name: string;
}) => {
  return (
    <NavLink to={`/${route}`}>
      {({ isActive }) => (
        <>
          <Icon className={`w-5 h-5 ${isActive ? "fill-slate-50" : "fill-red-600"}`} />
          <p className={`text-lg ${isActive ? "text-white" : "text-purple-600"}`}>{name}</p>
        </>
      )}
    </NavLink>
  );
};

export { NavigationList };
