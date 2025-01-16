import { useState, useEffect } from "react";
import { User } from "../interfaces/users";
import { ErrorBack } from "../interfaces/error";
import { ErrorType } from "../enum";
import { getUser } from "../services/Users/getUser";
import { initialErrorState, isErrorBack } from "../utils/errorBack";

const useUserData = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorBack>(initialErrorState);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setIsLoading(true);
    setError(initialErrorState);
    try {
      const userResponse = await getUser();
      setUser(userResponse);
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

  return { user, isLoading, error };
};

export { useUserData };
