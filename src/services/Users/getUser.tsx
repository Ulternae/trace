import data from "../../utils/dataUser.json";
// import { numRandom } from "../../utils/numRandom";
import { User } from "../../interfaces/users";
import { ErrorBack } from "../../interfaces/error";
import { ErrorType } from "../../enum";

const getUser = async (): Promise<User> => {
  try {
    // if (numRandom({ max: 1 }) === 1) {
    //   throw { error: true, typeError: ErrorType.ErrorGetUser } as ErrorBack;
    // }
    return new Promise<User>((resolve) => {
      setTimeout(() => {
        resolve(data as User);
      }, 1000); // Retraso de 1 segundo
    });
  } catch (error) {
    console.error(ErrorType.ErrorSendInfo, error);
    throw { error: true, typeError: ErrorType.ErrorSendInfo } as ErrorBack;
  }
};

export { getUser };
