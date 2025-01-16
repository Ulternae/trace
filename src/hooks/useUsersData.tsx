import { useState, useEffect } from "react";
import { User } from "../interfaces/users";
import { ErrorBack } from "../interfaces/error";
import { ErrorType } from "../enum";
import { getUsers } from "../services/Users/getUsers";
import { initialErrorState, isErrorBack } from "../utils/errorBack";

const useUsersData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorBack>(initialErrorState);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    setError(initialErrorState);
    try {
      const usersResponse = await getUsers();
      setUsers(usersResponse);
    } catch (e) {
      if (isErrorBack(e)) {
        setError(e);
      } else {
        setError({ error: true, typeError: ErrorType.UnknownError });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { users, isLoading, error };
};

export { useUsersData };
