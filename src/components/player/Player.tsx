import PlayerTop from "./PlayerTop/PlayerTop";
import PlayerAlbum from "./PlayerAlbum/PlayerAlbum";
import PlayerData from "./PlayerData/PlayerData";

const Player = () => {
    return (
        <div className="player-container">
            <PlayerTop />
            <PlayerAlbum />
            <PlayerData />

            
        </div>
    );
}

export default Player;