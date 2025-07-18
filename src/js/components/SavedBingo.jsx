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
                        <div className="saved-bingo__box__list-lis__buttons-box">
                            <p title="Ilość haseł" className="saved-bingo__box__list-lis__buttons-box__counter">{game.entries.length}</p>
                            <button title="Graj" className="saved-bingo__box__list-lis__buttons-box__play" id="play-btn"><svg width="30px" height="30px" viewBox="0 0 24 24" fill="rgb(2, 165, 2)" xmlns="http://www.w3.org/2000/svg" stroke="rgb(2, 165, 2)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="rgba(3, 143, 3, 1)" strokeWidth="2" strokeLinejoin="round"></path> </g></svg></button>
                            <button title="Usuń" className="saved-bingo__box__list-lis__buttons-box__delete" id="delete-btn"><svg fill="#ff0000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg></button>
                        </div>
                    </li>
                    )}
                </ul>
            </section>
        </aside>
    )
}

export default SavedBingo;