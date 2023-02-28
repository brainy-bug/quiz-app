import { useContext } from "react";

import {QuizContext}  from "../context/QuizContext";

export const useQuizContext = () => {
  return useContext(QuizContext);
};
