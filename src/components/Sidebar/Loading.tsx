const SidebarLoading = () => {
  return (
    <aside
      className="hidden md:flex animate-pulse w-[250px] h-[640px] flex-col dark:bg-liwr-600 bg-perl-300 pt-10 rounded-2xl"
    >
      <header className="flex flex-col justify-between gap-8">
        <div className="flex gap-3 px-7 relative">
          <div className="mb-4 w-full h-6 bg-liwr-300 dark:bg-perl-600/50 rounded-xl"></div>
        </div>
        <div className="grid grid-cols-[36px_1fr] h-9 gap-3 px-7 mt-2">
          <div className="w-9 h-9 bg-liwr-500/50 dark:bg-perl-500/50 rounded-full"></div>
          <div className="flex flex-col justify-center">
            <div className="w-2/3 h-4 bg-liwr-800/40 dark:bg-perl-600/50 rounded-xl"></div>
            <div className="w-1/2 h-3 bg-liwr-800/40 dark:bg-perl-600/50 rounded-xl mt-1"></div>
          </div>
        </div>
        <div className="h-1 w-full bg-liwr-500/50 dark:bg-perl-500/50 mt-2"></div>
      </header>

      <nav className="py-10 px-7 flex flex-col gap-2">
        <ul className="flex flex-col gap-3">
          <li className="w-full h-12 bg-liwr-300 dark:bg-perl-600/50 rounded-lg flex items-center gap-2 px-4">
            <div className="w-2/3 h-4 bg-liwr-500/50 dark:bg-perl-500/50 rounded-lg"></div>
          </li>
          <li className="w-full h-12 rounded-lg flex items-center gap-2 px-4">
            <div className="w-2/3 h-4 bg-liwr-500/50 dark:bg-perl-500/50  rounded-lg"></div>
          </li>
          <li className="w-full h-12 rounded-lg flex items-center gap-2 px-4">
            <div className="w-2/3 h-4 bg-liwr-500/50 dark:bg-perl-500/50  rounded-lg"></div>
          </li>
        </ul>
      </nav>

      <div>
        <div className="h-1 w-full bg-liwr-500/50 dark:bg-perl-500/50"></div>
        <div className="py-12 px-11 grid gap-8">
          <div className="w-4/5 h-4 bg-liwr-500/50 dark:bg-perl-500/50  rounded-lg"></div>
          <div className="w-2/3 h-4 bg-liwr-500/50 dark:bg-perl-500/50  rounded-lg"></div>
        </div>
      </div>
    </aside>
  );
};

export { SidebarLoading };
