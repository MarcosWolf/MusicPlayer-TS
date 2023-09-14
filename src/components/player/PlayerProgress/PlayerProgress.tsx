const PlayerProgress = () => {
    return (
        <div className="player-song-progress">
            <div id="player-song-trackbar" className="player-song-trackbar">
                <div id="trackbar-currentProgress" className="trackbar-currentProgress" />

                <div className="player-song-durationWrapper">
                    <span id="player-song-currentTime">0:00</span>
                    <span id="player-song-duration">0:00</span>
                </div>
            </div>
        </div>
    );
}

export default PlayerProgress;