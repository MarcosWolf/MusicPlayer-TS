import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const PlayerData = () => {
    return (
        <div className="player-song-mainData">
            <div className="player-song-dataTitle">
                <div id="player-song-title" className="player-song-title">Music Title</div>
                <div id="player-song-artist" className="player-song-artist">Artist Name</div>
            </div>

            <div className="player-song-favorite">
                <FontAwesomeIcon icon={faHeart} />
            </div>
        </div>
    );
}

export default PlayerData;