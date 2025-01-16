import { ErrorBack } from "../interfaces/error";

const initialErrorState: ErrorBack = {
  typeError: "",
  error: false,
};

const isErrorBack = (e: unknown): e is ErrorBack => {
  return (
    typeof e === "object" && e !== null && "error" in e && "typeError" in e
  );
};

export { initialErrorState , isErrorBack }