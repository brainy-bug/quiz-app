import Loader from "../../components/Loader";
import Modal from "../../components/Modal";

import { useQuizContext } from "../../hooks/useQuizContext";

import "./quiz-page.css";

const Quiz = () => {
  const { isLoading, questions, index, correct, nextQuestion, checkAnswer } =
    useQuizContext();

  if (isLoading) return <Loader />;

  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];

  return (
    <main>
      <Modal navigate={navigate} />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correct}/{index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className='answer-btn'
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
};
export default Quiz;
