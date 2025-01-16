import { ErrorBack } from "../interfaces/error";
import { User } from "../interfaces/users"

type Languages = "es" | "en" | "gl"

type OutletContextType = {
  users: User[]
  isUsersLoading: boolean;
  usersError: ErrorBack
}

export type { Languages, OutletContextType }