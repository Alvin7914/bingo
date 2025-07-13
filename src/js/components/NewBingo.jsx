import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import plusSVG from '../../assets/plus-svg.svg';

const NewBingo = () => {

    const [entriesList, setEntriesList] = useState([]);

    useEffect(() => {

        setEntriesList(['a', 'b', 'c']);

    }, []);



    return (
<main className="new-bingo">

    <form className="new-bingo__form">

        <input type="text" placeholder="Nazwa" />
        <h2>Hasła:</h2>
        <div>
            {entriesList.map( item => <li>{item}</li>)}
        </div>


    </form>

</main>
    )
}

export default NewBingo;