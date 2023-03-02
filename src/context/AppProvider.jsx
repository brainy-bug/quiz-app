import { AuthProvider } from "./AuthContext";

import { QuizProvider } from "./QuizContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <QuizProvider>{children}</QuizProvider>
    </AuthProvider>
  );
};
export default AppProvider;
