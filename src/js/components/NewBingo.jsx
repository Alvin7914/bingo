import React, { useState, useEffect } from "react";

const NewBingo = () => {

    const [entriesList, setEntriesList] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('entriesList') !== null) {
            setEntriesList(JSON.parse(localStorage.getItem('entriesList')))
        }

    }, []);

    const addEntry = () => { // handler do przycisku dodawania wpisu
        const newEntryInput = document.querySelector('#new-entry-input');
        const newValue = newEntryInput.value.trim();

        if (newValue === "") return;

        const newObject = {
            id: (localStorage.getItem('entriesList') === null || JSON.parse(localStorage.getItem('entriesList')).length === 0)
                ? 1
                : JSON.parse(localStorage.getItem('entriesList'))[JSON.parse(localStorage.getItem('entriesList')).length - 1].id + 1,
            entry: newValue
        }

        const updatedEntries = [...entriesList, newObject];

        setEntriesList(updatedEntries);
        localStorage.setItem('entriesList', JSON.stringify(updatedEntries));

        newEntryInput.value = '';
    }

    const removeEntry = (e) => { // handler do przycisku usuwania wpisu

        if (e.target.parentElement.tagName === "g") {
            const toDelete = e.target.parentElement.parentElement.parentElement.children[0].textContent;

            const newList = JSON.parse(localStorage.getItem('entriesList')).filter(entry => entry.entry !== toDelete)

            localStorage.setItem('entriesList', JSON.stringify(newList));
            setEntriesList(newList);
        } else {
            const toDelete = e.target.parentElement.children[0].textContent;
            const newList = JSON.parse(localStorage.getItem('entriesList')).filter(entry => entry.entry !== toDelete)

            localStorage.setItem('entriesList', JSON.stringify(newList));
            setEntriesList(newList);
        }
    }

    const clearAll = (e) => {
        e.preventDefault();

        const inputEntry = document.querySelector('#new-entry-input');
        const inputName = document.querySelector('#name-input');
        const emptyList = [];

        setEntriesList(emptyList);
        localStorage.setItem('entriesList', JSON.stringify(emptyList));
        inputEntry.value = "";
        inputName.value = "";
    }

    const saveGame = (e) => {
        e.preventDefault();

        if (entriesList.length == 0 || document.querySelector('#name-input').value == "") {
            alert('Nie można dodać nienazwanej lub pustej planszy')
        } else {
            const gamesList = JSON.parse(localStorage.getItem('savedGames')) || []; //start
            const newName = document.querySelector("#name-input").value;

            const nameExists = gamesList.some(game => game.name.toLowerCase() === newName.toLowerCase());

            if (nameExists) {
                alert("Gra o takiej nazwie już istnieje");
                return;
            } else {

                const game1 = JSON.parse(localStorage.getItem('entriesList'));
                const emptyEntries = [];


                if (localStorage.getItem('savedGames') === null || localStorage.getItem('savedGames').length == 0) {
                    const name = document.querySelector('#name-input').value;
                    const gameObject = {
                        name: name,
                        entries: game1
                    }

                    const game2 = [gameObject]
                    localStorage.setItem('savedGames', JSON.stringify(game2))
                } else {
                    const games = JSON.parse(localStorage.getItem('savedGames'));
                    const name = document.querySelector('#name-input').value;
                    const gameObject = {
                        name: name,
                        entries: game1
                    }

                    const games2 = [...games, gameObject];
                    localStorage.setItem('savedGames', JSON.stringify(games2));
                }

                setEntriesList([]);
                localStorage.setItem('entriesList', JSON.stringify(emptyEntries));
                document.querySelector('#name-input').value = '';
                document.querySelector('#new-entry-input').value = '';



            }


        }
    }





    return (
        <main className="new-bingo">

            <form className="new-bingo__form">
                <input type="text" placeholder="Nazwa planszy" className="new-bingo__form__input-name" id='name-input' />
                <h2 className="new-bingo__form-h2">Hasła: {entriesList.length}</h2>
                <div className="new-bingo__form-box">
                    <ul className="new-bingo__form-list">
                        {entriesList.map((item, i) =>
                            <li id={i} className="new-bingo__form-list__lis" key={item.id}>
                                <span>{item.entry}</span>
                                <svg
                                    onClick={removeEntry}
                                    className="new-bingo__form__trash-svg"
                                    width="40px"
                                    height="40px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#056b05">
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"></g>
                                    <g
                                        id="SVGRepo_iconCarrier">
                                        <path
                                            d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4"
                                            stroke="#1C274C"
                                            strokeWidth="1.5"
                                            strokeLinecap="round">
                                        </path>
                                        <path
                                            d="M20.5 6H3.49988"
                                            stroke="#1C274C"
                                            strokeWidth="1.5"
                                            strokeLinecap="round">
                                        </path>
                                        <path
                                            d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"
                                            stroke="#1C274C"
                                            strokeWidth="1.5"
                                            strokeLinecap="round">
                                        </path>
                                        <path
                                            d="M9.5 11L10 16"
                                            stroke="#1C274C"
                                            strokeWidth="1.5"
                                            strokeLinecap="round">
                                        </path>
                                        <path
                                            d="M14.5 11L14 16"
                                            stroke="#1C274C"
                                            strokeWidth="1.5"
                                            strokeLinecap="round">
                                        </path>
                                    </g>
                                </svg>
                            </li>
                        )}
                        <li className="form__add">
                            <input type="text" placeholder="Wpisz nowe hasło" className="new-bingo__form__input-entry" id="new-entry-input" />
                            <div className="plus-sign">
                                <span className='plus-1' onClick={addEntry}></span>
                                <span className='plus-2' onClick={addEntry}></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="new-bingo__form__btn-box">
                    <button className="new-bingo__form-clearBtn" onClick={clearAll}>Wyczyść wszystko</button>
                    <button className="new-bingo__form-saveBtn" onClick={saveGame}>Zapisz</button>
                </div>
            </form>
        </main>
    )
}

export default NewBingo;