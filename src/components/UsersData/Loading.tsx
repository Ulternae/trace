const UsersDataLoading = ({
  containSlug = false,
}: {
  containSlug?: boolean;
}) => {
  const dynamicWidths = [
    "68%",
    "72%",
    "85%",
    "76%",
    "70%",
    "88%",
    "80%",
    "68%",
    "84%",
    "74%",
    "78%",
    "86%",
    "88%",
    "72%",
    "76%",
    "80%",
    "82%",
    "68%",
  ];

  return (
    <div className="animate-pulse py-8 grid grid-cols-1 max-w-[1111px] lg:grid-cols-[330px_1fr] xl:grid-cols-[6fr_6fr_8fr] grid-rows-[auto_auto_auto_1fr] sm:grid-rows-[auto_48px_auto_1fr] lg:grid-rows-[auto_48px_1fr] gap-y-6 gap-x-7 md:gap-y-12">
      <div className="lg:col-span-full mb-3 w-1/6 h-6 bg-liwr-300 dark:bg-perl-600/50 rounded-xl"></div>

      <div className="lg:col-span-full max-w-[612px] w-full h-20 grid-rows-[3fr_2fr] sm:grid-rows-1 sm:h-12 grid sm:grid-cols-[1fr_168px]">
        <div className="bg-perl-400 dark:bg-liwr-700 h-full rounded-l-lg rounded-tr-lg sm:rounded-tr-none px-4"></div>

        <div className="group dark:bg-liwr-400 w-full max-w-52 ml-auto sm:max-w-none bg-perl-600 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg relative flex items-center justify-between cursor-pointer">
          <div className="w-2/3 ml-4 bg-liwr-500/50 dark:bg-perl-500/50 h-4 rounded-lg"></div>
        </div>
      </div>

      {containSlug && (
        <article className="lg:max-w-96 max-h-[700px] bg-perl-300/50 dark:bg-liwr-500 rounded-lg flex flex-col justify-between">
          <header className="py-10 flex flex-col gap-16">
            <div className="flex flex-wrap justify-center items-center gap-9 px-4 sm:px-12">
              <div className="w-36 h-36 rounded-full bg-liwr-500/50 dark:bg-perl-500/50"></div>
              <span className="flex flex-col gap-2">
                <div className="w-32 h-6 bg-liwr-800/40 dark:bg-perl-600/50 rounded-2xl"></div>
              </span>
            </div>

            <div className="grid gap-3">
              {dynamicWidths.slice(2, 7).map((value, index) => (
                <div
                  className="flex gap-4 h-11 items-center"
                  key={index}
                  style={{ width: value }}
                >
                  <div className="min-w-24 h-full rounded-r-lg bg-liwr-500/50 dark:bg-perl-500/50 px-4 w-auto grid items-center"></div>
                  <div
                    className="w-2/3 min-w-36 max-w-44 h-6 bg-liwr-800/40 dark:bg-perl-600/50 rounded-xl pr-4"
                  ></div>
                </div>
              ))}
            </div>
          </header>

          <footer className="py-4 items-center w-full cursor-default bg-liwr-500/50 dark:bg-perl-500/50 leading-none rounded-b-lg"></footer>
        </article>
      )}

      <section className="grid gap-8 xl:col-span-2 lg:row-start-3">
        <div
          className="flex flex-wrap sm:grid lg:flex xl:grid sm:grid-cols-2 gap-x-4 gap-y-3"
          role="list"
        >
          {dynamicWidths.map((value, index) => (
            <div
              key={index}
              className="group w-60 h-[50px] sm:w-full px-6 flex gap-4  rounded-lg bg-perl-400 dark:bg-liwr-700 cursor-pointer items-center"
            >
              <div
                style={{ width: value }}
                className="h-4 bg-liwr-800/40 dark:bg-perl-600/50 rounded-lg"
              ></div>
            </div>
          ))}
        </div>

        <nav className="row-start-1 sm:row-start-2 flex flex-col gap-2 items-center justify-center">
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 bg-liwr-500/50 dark:bg-perl-500/50 rounded"></div>
            <div className="w-5 h-5 bg-liwr-500/50 dark:bg-perl-500/50 rounded"></div>
            <div className="w-12 h-8 bg-liwr-500/50 dark:bg-perl-500/50 rounded"></div>
            <div className="w-5 h-5 bg-liwr-500/50 dark:bg-perl-500/50 rounded"></div>
            <div className="w-5 h-5 bg-liwr-500/50 dark:bg-perl-500/50 rounded"></div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export { UsersDataLoading };
