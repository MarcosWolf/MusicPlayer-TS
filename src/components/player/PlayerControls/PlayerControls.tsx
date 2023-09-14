import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faBackwardStep, faCirclePause, faForwardStep, faRepeat } from '@fortawesome/free-solid-svg-icons';

const PlayerControls = () => {
    return (
        <div className="player-controls">
            <div className="control-shuffle">
                <FontAwesomeIcon icon={faShuffle} />
            </div>

            <div className="control-previousTrack">
                <FontAwesomeIcon icon={faBackwardStep} />
            </div>

            <div className="control-togglePlay">
                <FontAwesomeIcon icon={faCirclePause} />
            </div>

            <div className="control-nextTrack">
                <FontAwesomeIcon icon={faForwardStep} />
            </div>

            <div className="control-repeat">
                <FontAwesomeIcon icon={faRepeat} />
            </div>
        </div>
    );
}

export default PlayerControls;