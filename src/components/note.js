import editBtnImage from "./media/edit_icon.png";
import removeBtnImage from "./media/remove_icon.png"

function Note({ note, key, remove }) {
    return (
        <div class="note" key={note.id}>

{/* { note.title } 
note in h3 */}
             <h3>{ note.title }</h3>  
            
            <div class="note_bottom">
                <p id="date">{ note.date }</p>
                <div class="btns">
                    {/* <button><img src={editBtnImage} alt=""/></button> */}
                    <button onClick={() => remove(note.id)}><img src={removeBtnImage} alt=""/></button>
                </div> 
            </div>
        </div>
    )
}

export default Note