import { useEffect, useMemo, useState } from "react"
import { User } from "../interfaces/users"

const usePagination = ({ maxItems, data} : {maxItems: number, data: User[]}) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  
  useEffect(() => {
    setCurrentPage(1)
  }, [data])

  const elements = useMemo(() => {
    const start = (currentPage - 1) * maxItems
    const end = start + maxItems
    return data.slice(start, end)
  }, [currentPage, maxItems, data])

  const totalPages = Math.ceil(data.length / maxItems);
  const totalElements = data.length

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  }

  return { currentPage, totalElements, elements, prevPage, nextPage, goToPage, totalPages}
}

export { usePagination }