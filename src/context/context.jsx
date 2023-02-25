import React, { useState, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import {
  SET_WAITING,
  SET_LOADING,
  SET_QUESTIONS,
  SET_INDEX,
  SET_ERROR,
  SET_CORRECT,
  CLOSE_MODAL,
} from "../utils/actions";
import reducer from "../utils/reducer";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const initialState = {
  isWaiting: null,
  isLoading: true,
  questions: [],
  index: 0,
  correct: 0,
  error: false,
  quiz: {
    amount: 10,
    category: "sports",
    difficulty: "easy",
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
        dispatch({ type: SET_ERROR });
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

  useEffect(() => {
    fetchQuestions(tempUrl);
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, nextQuestion, checkAnswer, closeModal }}
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
