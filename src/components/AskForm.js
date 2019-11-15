import React from 'react'

function AskForm() {
    return (
        <div>
            <form>
                <input type="text" name="First question to ask" /><br />
                <input type="text" name="Second question to ask" /><br />
                <input type="text" name="Third question to ask" /><br />
                <input type="submit" value="Absenden" />
            </form>
        </div>
    )
}

export default AskForm;