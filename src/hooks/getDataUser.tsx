import { User } from "../interfaces/users";

const getDataUser = ({ userId, data }: { data: User[]; userId: string }) => {
  return data.find((u) => u.id === userId);
};

export { getDataUser };
