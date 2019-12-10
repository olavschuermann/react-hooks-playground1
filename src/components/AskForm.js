import React, { useState } from 'react'

function AskForm( { getDataFirstField } ) {

    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondtInput] = useState('');
    const [thirdInput, setThirdInput] = useState('');


    const dataField = (e) => {
        // letzter Buchstabe wird im Ausgabe-Feld nicht angezeigt...
        console.log('e gleich: ' + e); // bis hier wird auch der letzte Buchstabe angezeigt
        // useState ist asynchronous! Daher Eingabe erst in Variable schieben. Klappt trotzdem nicht...
        let dataTemp = e;
        console.log('dataTemp: ' + dataTemp);
        setFirstInput(dataTemp);
        console.log('Inhalt von firstInput: ' + firstInput);
        getDataFirstField(firstInput);
    }

    const dataSubmit = (e) => {
        e.preventDefault();
        console.log("Submit!");
        console.log('e aus submit: ' + firstInput);
        console.log('e aus submit: ' + secondInput);
        console.log('e aus submit: ' + thirdInput);
    }

    // next: TO-DO
    // aus Buch React Pure Beispiele übernehmen

    return (
        <div>
            <form onSubmit={dataSubmit}>
                <input type="text" name="First question to ask" value={firstInput} 
                    onChange={e => dataField(e.target.value)} /> <br />
                    {/* // onChange={e => setFirstInput(e.target.value)} /><br /> */}
                <input type="number" name="How old are you?" value={secondInput} /><br />
                <input type="text" name="Third question to ask" value={thirdInput} /><br />
                <input type="submit" value="Absenden" />
            </form>
        </div>
    )
}

export default AskForm;