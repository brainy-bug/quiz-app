import React, { useContext, useReducer } from "react";
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
  RESET,
} from "../utils/actions";
import reducer from "../utils/reducer";

import { table } from "../data/data";

const API_ENDPOINT = "https://opentdb.com/api.php?";

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
    category: "any category",
    difficulty: "any dificulty",
  },
  isModalOpen: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        dispatch({
          type: SET_ERROR,
          payload: "can't generate questions, please try different options",
        });
      }
    } else {
      dispatch({ type: SET_WAITING, payload: true });
    }
  };

  const nextQuestion = () => dispatch({ type: SET_INDEX });

  const checkAnswer = (value) =>
    dispatch({ type: SET_CORRECT, payload: value });

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: SET_QUIZ, payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = state.quiz;
    if (category === "any category" || difficulty === "any difficulty") {
      dispatch({ type: SET_ERROR, payload: "all fields are required" });
      return;
    } else {
      const url = `${API_ENDPOINT}&amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
      dispatch({ type: RESET });
      fetchQuestions(url);
      
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        nextQuestion,
        checkAnswer,
        closeModal,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
