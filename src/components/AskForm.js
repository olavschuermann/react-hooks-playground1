import React, { useState } from 'react'

function AskForm( { getDataFirstField } ) {

    const [firstInput, setFirstInput] = useState('');


    // Daten zurückschicken an Parent component?
    // Passing props up > https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969828#overview

    const dataField = (e) => {
        setFirstInput(e);
        console.log('Inhalt von firstInput: ' + firstInput);
        getDataFirstField(firstInput);
    }

    return (
        <div>
            <form>
                {/* // Inhalt aus erstem Feld abfragen und in useState speichern, Ausgabe in console.log */}
                <input type="text" name="First question to ask" value={firstInput} 
                onChange={e => dataField(e.target.value)} /><br />
                <input type="number" name="How old are you?" /><br />
                <input type="text" name="Third question to ask" /><br />
                <input type="submit" value="Absenden" />
            </form>
        </div>
    )
}

export default AskForm;