import { ErrorBack } from "../../interfaces/error";
import { User } from "../../interfaces/users";
import data from "../../utils/dataUsers.json";
import { numRandom } from "../../utils/numRandom";
import { ErrorType } from "../../enum";

const getUsers = async (): Promise<User[]> => {
  try {

    return new Promise<User[]>((resolve, reject) => {
      setTimeout(() => {
        if (numRandom({ max: 25}) === 1) {
          reject({ error: true, typeError: ErrorType.ErrorGetUsers } as ErrorBack)
        }
        resolve(data as User[]);
      }, 800);
    });

  } catch (error) {
    console.error(ErrorType.ErrorSendInfo, error);
    throw { error: true, typeError: ErrorType.ErrorSendInfo } as ErrorBack;
  }
};

export { getUsers };
