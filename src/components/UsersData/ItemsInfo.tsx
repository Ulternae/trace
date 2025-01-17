const ItemsInfo = ({ name , value} : {name: string, value: string}) => {
  return (
    <div className="flex gap-4 h-11 items-center">
      <div className="min-w-24 h-full rounded-r-lg bg-perl-400 dark:liwr-700 px-4 w-auto grid items-center">
        <p className="dark:text-liwr-300 text-perl-700">{name}</p>
      </div>
      <p className="leading-none dark:text-liwr-300 text-perl-700 pr-4">{value}</p>
    </div>
  )
}

export { ItemsInfo }