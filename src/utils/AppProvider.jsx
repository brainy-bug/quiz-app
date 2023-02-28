import { AuthProvider } from "../context/AuthContext";
import { QuizProvider } from "../context/QuizContext";
import { FormProvider } from "../context/FormContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <FormProvider>
        <QuizProvider>{children}</QuizProvider>
      </FormProvider>
    </AuthProvider>
  );
};
export default AppProvider;
