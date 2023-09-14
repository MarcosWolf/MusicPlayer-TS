import PlayerTop from "./PlayerTop/PlayerTop";
import PlayerAlbum from "./PlayerAlbum/PlayerAlbum";
import PlayerData from "./PlayerData/PlayerData";
import PlayerProgress from "./PlayerProgress/PlayerProgress";
import PlayerControls from "./PlayerControls/PlayerControls";
import PlayerBottom from "./PlayerBottom/PlayerBottom";

const Player = () => {
    return (
        <div className="player-container">
            <PlayerTop />
            <PlayerAlbum />
            <PlayerData />
            <PlayerProgress />
            <PlayerControls />
            <PlayerBottom />            
        </div>
    );
}

export default Player;