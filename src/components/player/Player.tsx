import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
    return (
        <div className="player-container">
            <div className="player-top">
                <div className="player-top-btnBack">
                    <i className="fa-solid fa-chevron-down"></i>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="player-top-textHeader">
                    <p>Tocando do álbum</p>
                    <p><span className="player-top-albumHeader">album name</span></p>
                </div>

                <div className="player-top-btnAbout">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
        </div>
    );
}

export default Player;