import { ChevronDownIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Languages } from "./Languages";

const SettingsUser = ({ name }: { name: string }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toogleActive = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsActive(!isActive)
  };

  const openActive = () => setIsActive(true)
  const styleInactiveIcon: string = "fill-perl-800 dark:fill-liwr-200";
  const styleActiveIcon: string =
    "fill-perl-700 dark:fill-liwr-300 group-hover:fill-perl-800 group-hover:dark:fill-liwr-200";

  return (
    <div
      onClick={openActive}
      className={`px-4 py-3 rounded-lg transition-colors duration-300
        ${
          isActive
            ? "bg-perl-400 dark:bg-liwr-500"
            : "hover:bg-perl-400 dark:hover:bg-liwr-500"
        }`}
    >
      <div className="group grid grid-cols-[20px_1fr_20px] justify-between gap-4 items-center">
        <Cog6ToothIcon
          className={`w-5 h-5 transition-colors duration-300 ${
            isActive ? styleInactiveIcon : styleActiveIcon
          }`}
        />
        <p
          className={`w-full transition-colors duration-300 ${
            isActive
              ? "text-perl-800 dark:text-liwr-200"
              : "text-perl-700 dark:text-liwr-300 group-hover:text-perl-800 group-hover:dark:text-liwr-200"
          }`}
        >
          {name}
        </p>
        <ChevronDownIcon
          onClick={toogleActive}
          className={`w-5 h-5 transition-all duration-300 transform z-10 cursor-pointer ${
            isActive
              ? `rotate-0 ${styleActiveIcon}`
              : `rotate-180 ${styleActiveIcon}`
          }`}
        />
      </div>
      { isActive && <Languages/>}
    </div>
  );
};

export { SettingsUser };
