import PropTypes from 'prop-types';
import './card.css';

const Card = ({ challenge, setChallengeSwitch, setIsHidden }) => {
  const handleValid = () => {
    setIsHidden('quiz');
    setChallengeSwitch(challenge.nameRegion); // je selectionne mon challenge et affiche le quiz
  };

  return (
    <div
      className="card"
      onClick={handleValid}
      onKeyDown={handleValid}
      aria-hidden="true"
    >
      <h2>{challenge.nameRegion}</h2>
      <div className="imgQuiz">
        <img src={challenge.image} alt={challenge.nameRegion} />
      </div>
    </div>
  );
};

Card.propTypes = {
  challenge: PropTypes.oneOfType([PropTypes.object]).isRequired,
  setChallengeSwitch: PropTypes.func.isRequired,
  setIsHidden: PropTypes.func.isRequired,
};

export default Card;
