import { useState } from 'react';
import addBtnImage from './media/addBtn.png';


function Form({ add }) {
    const [userInput, setUserInput] = useState('')

    const handleOnChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        add(userInput)
        setUserInput("")
        // console.log("subnited")
    }

    const hadleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="addNote">
                <h4>New note</h4>

                <label for="">Note title</label>
                
                <textarea name="" id="" cols="30" rows="10"
                    value={userInput}
                    type="text"
                    onChange={handleOnChange}
                    onKeyDown={hadleKeyPress}>
                </textarea>

                <button>
                    <img src={addBtnImage} alt="" />
                </button>
            </div>
        </form>
    )
}

export default Form;