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
} from "./actions";

const reducer = (state, action) => {
  const quiz = state.quiz;

  switch (action.type) {
    case SET_WAITING:
      return { ...state, isWaiting: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: false };
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case SET_INDEX:
      const oldIndex = state.index;
      let newIndex = oldIndex + 1;

      if (newIndex > state.questions.length - 1)
        return { ...state, isModalOpen: true, index: 0 };
      else return { ...state, index: newIndex };

    case SET_ERROR:
      const error = state.error;
      if (action.payload)
        return {
          ...state,
          error: { ...error, bool: true, response: action.payload },
        };
      return { ...state };

    case SET_CORRECT:
      if (state.index < state.questions.length - 1) {
        if (action.payload)
          return {
            ...state,
            correct: state.correct + 1,
            index: state.index + 1,
          };
        else return { ...state, index: state.index + 1 };
      } else
        return {
          ...state,
          correct: state.correct + 1,
          isModalOpen: true,
          index: 0,
        };

    case SET_QUIZ:
      return {
        ...state,
        quiz: { ...quiz, [action.payload.name]: action.payload.value },
      };

    case CLOSE_MODAL:
      return { ...state, isModalOpen: false, isWaiting: true,correct: 0,error: false,
        quiz: {
          ...quiz,
          category: "select category",
          difficulty: "select dificulty",
        }, };


    default:
      throw new Error(`no matching "${action.type} action`);
  }
};

export default reducer;
