import { AuthProvider } from "../context/AuthContext";
import { FormProvider } from "../context/FormContext";
import { PageProvider } from "../context/PageContext";
import { QuizProvider } from "../context/QuizContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <FormProvider>
        <PageProvider>
          <QuizProvider>{children}</QuizProvider>
        </PageProvider>
      </FormProvider>
    </AuthProvider>
  );
};
export default AppProvider;
