import { useQuizContext } from "../hooks/useQuizContext";
import congratsIcon from "../assets/congrats-icon.png";
import angryIcon from "../assets/angry-icon.png";

const Modal = ({ navigate }) => {
  const { isModalOpen, closeModal, correct, questions } = useQuizContext();
  const percent = ((correct / questions.length) * 100).toFixed(0);
  const iconURL = () => {
    if (percent < 45) return angryIcon;
    return congratsIcon;
  };

  const handleCloseModal = () => {
    closeModal();
    navigate("/");
  };

  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className='modal-content'>
        <img src={iconURL(iconURL)} alt='congrats-icon' />
        <h2>{percent < 45 ? "failed!" : "congrats!"}</h2>
        {percent < 45 && <p>WHAT DO YOU KNOW?</p>}
        <p>You answered {percent}% of questions correctly</p>
        <button className='close-btn' onClick={handleCloseModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
