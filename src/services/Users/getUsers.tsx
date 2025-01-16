import { ErrorBack } from "../../interfaces/error";
import { User } from "../../interfaces/users";
import data from "../../utils/dataUsers.json";
// import { numRandom } from "../../utils/numRandom";
import { ErrorType } from "../../enum";

const getUsers = async (): Promise<User[]> => {
  try {
    // if (numRandom({ max: 1 }) === 1) {
    //   throw { error: true, typeError: ErrorType.ErrorGetUsers } as ErrorBack;
    // }
    return data as User[];
  } catch (error) {
    console.error(ErrorType.ErrorSendInfo, error);
    throw { error: true, typeError: ErrorType.ErrorSendInfo } as ErrorBack;
  }
};

export { getUsers };
