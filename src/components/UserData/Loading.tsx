const UserDataLoading = () => {
  return (
    <section
    className="py-8 flex flex-col max-w-[800px] gap-y-6 gap-x-7 md:gap-y-12 animate-pulse"
  >
    <header className="lg:col-span-full flex gap-4 items-center">
      <div className="w-1/5 h-6 bg-liwr-300 dark:bg-perl-600/50 rounded-lg"></div>
    </header>

    <article className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-6">
        <div className="rounded-lg w-36 h-36 bg-perl-400 dark:bg-liwr-700"></div>
        <div className="flex flex-col gap-4 justify-center">
          <div className="w-2/3 h-6 bg-liwr-300 dark:bg-perl-600/50 rounded-lg"></div>
          <div className="w-1/2 h-4 bg-liwr-300 dark:bg-perl-600/50 rounded-lg"></div>
        </div>
      </div>

      <div className="w-full h-16 bg-perl-400 dark:bg-liwr-700 rounded-lg"></div>

      <div className="grid xl:grid-cols-2 gap-y-2 gap-x-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex gap-4 min-h-11 items-center"
          >
            <div className="min-w-24 h-full bg-liwr-300 dark:bg-perl-600/50 px-4 w-auto rounded-lg"></div>
            <div className="max-w-52 flex-1 h-4 bg-liwr-300 dark:bg-perl-600/50 rounded-lg"></div>
          </div>
        ))}
      </div>
    </article>
  </section>
  );
};

export { UserDataLoading };
