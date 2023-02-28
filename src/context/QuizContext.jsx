import { useContext, createContext, useReducer } from "react";
import axios from "axios";
import {
  SET_WAITING,
  SET_LOADING,
  SET_QUESTIONS,
  SET_INDEX,
  SET_ERROR,
  SET_CORRECT,
  SET_QUIZ,
  CLOSE_MODAL,
} from "../utils/actions";
import reducer from "../utils/reducer";

const initialState = {
  isWaiting: true,
  isLoading: true,
  questions: [],
  index: 0,
  correct: 0,
  error: {
    bool: false,
    response: "",
  },
  quiz: {
    amount: 5,
    category: "select category",
    difficulty: "select difficulty",
  },
  isModalOpen: false,
};

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleError = (response) =>
    dispatch({ type: SET_ERROR, payload: response });

  const fetchQuestions = async (url) => {
    dispatch({ type: SET_WAITING, payload: false });
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        dispatch({ type: SET_QUESTIONS, payload: data });
        dispatch({ type: SET_LOADING });
        dispatch({ type: SET_WAITING, payload: false });
      } else {
        dispatch({ type: SET_WAITING, payload: true });
        handleError("can't generate questions, please try different options");
      }
    } else {
      
      dispatch({ type: SET_WAITING, payload: true });
    }
  };

  const nextQuestion = () => dispatch({ type: SET_INDEX });

  const checkAnswer = (value) =>
    dispatch({ type: SET_CORRECT, payload: value });

  const closeModal = () => dispatch({ type: CLOSE_MODAL });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: SET_QUIZ, payload: { name, value } });
  };

  return (
    <QuizContext.Provider
      value={{
        ...state,
        handleError,
        fetchQuestions,
        nextQuestion,
        checkAnswer,
        closeModal,
        handleChange,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizProvider, QuizContext,  };
