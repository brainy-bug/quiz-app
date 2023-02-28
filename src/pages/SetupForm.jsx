import { useNavigate } from "react-router-dom";
// import { FormButton } from "../components/Form";
import { useQuizContext } from "../hooks/useQuizContext";
import { categoryOptions, diffOptions, table } from "../data/data";

const API_ENDPOINT = "https://opentdb.com/api.php?";

const SetupForm = () => {
  const navigate = useNavigate();
  const { quiz, handleChange, error, handleError, fetchQuestions } =
    useQuizContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    if (category === "select category" || difficulty === "select difficulty") {
      handleError("all fields are required");
      return;
    } else {
      const url = `${API_ENDPOINT}&amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
      fetchQuestions(url);
      navigate("/quiz");
    }
  };

  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>setup a quiz</h2>
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          {/* category */}

          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              {categoryOptions.map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>

          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              {diffOptions.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          {error.bool && <p className='error'>{error.response}</p>}
          {/* <FormButton handleSubmit={handleSubmit}>start</FormButton> */}
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
