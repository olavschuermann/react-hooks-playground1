import React, { useState } from 'react'

function AskForm() {

    const {firstInput, setFirstInput} = useState('');

    return (
        <div>
            <form>
                {/* // Inhalt aus erstem Feld abfragen und in useState speichern, Ausgabe in console.log */}
                <input type="text" name="First question to ask" /><br />
                {console.log(firstInput)}
                <input type="number" name="How old are you?" /><br />
                <input type="text" name="Third question to ask" /><br />
                <input type="submit" value="Absenden" />
            </form>
        </div>
    )
}

export default AskForm;