import { useNavigate } from "react-router-dom";
import { Panda } from "../../icons/Panda";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

const ViewMessage = ({
  message,
  routeName = "",
  redirect = false,
  redirectUrl = "",
}: {
  message: string;
  routeName?: string;
  redirect?: boolean;
  redirectUrl?: string;
}) => {
  const navigate = useNavigate();
  
  return (
    <section className="py-8 flex flex-col max-w-[1111px] gap-y-6 gap-x-7 md:gap-y-12">
      <div className="lg:col-span-full flex gap-4 items-center">
        {redirect && (
          <ChevronLeftIcon 
            className="w-5 h-5 transition-colors duration-300 fill-perl-700 dark:fill-liwr-300 hover:fill-perl-800 hover:dark:fill-liwr-200 cursor-pointer"
            onClick={() => navigate(redirectUrl)}
          />
        )}
        <h1 className=" font-bold text-3xl text-perl-800 dark:text-liwr-200">
          {routeName}
        </h1>
      </div>
      <div className="w-full h-full gap-8 lg:grid lg:grid-cols-[2fr_1fr] lg:items-center justify-center flex flex-col">
        <p className="lg:text-end font-bold text-lg sm:text-2xl text-perl-800 dark:text-liwr-200 leading-none text-center">
          {message}
        </p>
        <Panda className="ml-auto max-w-96 max-h-96 " />
      </div>
    </section>
  );
};

export { ViewMessage };
