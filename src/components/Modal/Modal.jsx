import { useGlobalContext } from "../../context/context";
import congratIcon from "../../assets/congrats-icon.png";
import angryIcon from "../../assets/angry-icon.png";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  const percent = ((correct / questions.length) * 100).toFixed(0);
  const iconURL = () => {
    if (percent < 45) return angryIcon;
    return congratIcon;
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
        <p>You answered {percent}% of questions correctly</p>
        <button className='close-btn' onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
