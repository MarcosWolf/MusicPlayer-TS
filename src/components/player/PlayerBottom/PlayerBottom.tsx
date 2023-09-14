import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faShareNodes, faBars } from '@fortawesome/free-solid-svg-icons';

const PlayerBottom = () => {
    return (
        <div className="player-bottom">
            <div className="player-bottom-left">
                <div className="player-bottom-btnDevice">
                    <FontAwesomeIcon icon={faMobileScreen} />
                </div>
            </div>

            <div className="player-bottom-right">
                <div className="player-bottom-share">
                    <FontAwesomeIcon icon={faShareNodes} />
                </div>

                <div className="player-bottom-playlist">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>
    );
}

export default PlayerBottom;