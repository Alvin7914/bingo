import React, { useEffect, useState } from "react";

const SavedBingo = () => {
    const [savedGames, setSavedGames] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('savedGames') !== null) {
            setSavedGames(JSON.parse(localStorage.getItem('savedGames')))
        }

    }, []);

    return (
        <aside className="saved-bingo">
            <section className="saved-bingo__box">
                <ul className="saved-bingo__box__list">
                    {savedGames.map((game, index) => <li id={index} className="saved-bingo__box__list-lis" key={game.name}>
                        
                            <span className="saved-bingo__box__list-lis__name">{game.name}</span>
                            <ul className="saved-bingo__box__list-lis__entries">
                                {game.entries.map((entry, index) => <li id={index} key={entry.entry}>{entry.entry}</li>)}
                            </ul>
                        
                    </li>
                    )}
                </ul>
            </section>
        </aside>
    )
}

export default SavedBingo;