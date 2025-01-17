import data from "../../utils/dataUser.json";
import { numRandom } from "../../utils/numRandom";
import { User } from "../../interfaces/users";
import { ErrorBack } from "../../interfaces/error";
import { ErrorType } from "../../enum";

const getUser = async (): Promise<User> => {
  try {

    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        if (numRandom({ max: 25 }) === 1) {
          reject({ error: true, typeError: ErrorType.ErrorGetUser } as ErrorBack)
        }
        resolve(data as User);
      }, 800);
    });

  } catch (error) {
    console.error(ErrorType.ErrorSendInfo, error);
    throw { error: true, typeError: ErrorType.ErrorSendInfo } as ErrorBack;
  }
};

export { getUser };
