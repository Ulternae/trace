import { useMemo, useState } from "react";
import { FilterUserType } from "../enum";
import { User } from "../interfaces/users";

const useFilterCategory = ({
  filterFavoritesOnly = false,
  valueFilter,
  usersData,
}: {
  filterFavoritesOnly?: boolean;
  valueFilter: string;
  usersData: User[];
}) => {
  const [currentFilter, setCurrentFilter] = useState<FilterUserType>(
    FilterUserType.FIRSTNAMES
  );

  const filteredData = useMemo(() => {
    if (filterFavoritesOnly) {
      return usersData.filter((v) => v.isFavorite);
    }
    return usersData;
  }, [filterFavoritesOnly, usersData]);

  const usersFiltered = useMemo(() => {
    return filteredData.filter((v) => v[currentFilter].toLowerCase().includes(valueFilter.toLowerCase()));
  }, [filteredData, currentFilter, valueFilter]);

  return { usersFiltered, currentFilter, setCurrentFilter };
};

export { useFilterCategory };

/*
const usersFiltered = useMemo(() => {
  return filteredData.filter(
    (v) =>
      v[currentFilter] && // Verifica el filtro actual
      Object.values(v)
        .some((value) =>
          value
            ?.toString()
            ?.toLowerCase()
            ?.includes("juan") // Verifica si incluye "juan"
        )
  );
}, [filteredData, currentFilter]);

*/