import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import plusSVG from '../../assets/plus-svg.svg';

const NewBingo = () => {

    const [entriesList, setEntriesList] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('entriesList') !== null) {
            setEntriesList(JSON.parse(localStorage.getItem('entriesList')))
        } else {
            setEntriesList(['a', 'b', 'c', 'd'])
        }

    }, []);



    return (
<main className="new-bingo">

    <form className="new-bingo__form">
        <input type="text" placeholder="Nazwa planszy" className="new-bingo__form__input-name"/>
        <h2 className="new-bingo__form-h2">Hasła:</h2>
        <ul className="new-bingo__form-list">
            {entriesList.map( item => <li>{item}</li>)}
            <li className="form__add">
                <input type="text" placeholder="Wpisz nowe hasło" className="new-bingo__form__input-entry"/>
                <div className="plus-sign">
                    <span className='plus-1'></span>
                    <span className='plus-2'></span>
                </div>
            </li>
        </ul>
        <button className="new-bingo__form-saveBtn">Zapisz</button>
    </form>
</main>
    )
}

export default NewBingo;