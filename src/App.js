import { useState } from 'react';
import Form from './components/form'
import Note from './components/note';

function App() {
    const [list, setList] = useState([])
    let today = new Date()

    const add = (userInput) => {
        if (userInput) {
            const newNote = {
                id: list.length,
                title: userInput,
                complete: false,
                date: today.getDate() + '/' + (today.getMonth() + 1) + '/' +  today.getFullYear() 
            }
            console.log(newNote)
            setList([...list, newNote])
            console.log("add 16, list", list.length)
        }

    }

    // const edit = () => {}

    const remove = (id) => {
        setList([...list.filter((note) => note.id !== id)])
    }

    // const handleToggle = (id) => {
    //     setList([
    //       ...todos.map((todo) => 
    //         todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
    //       )
    //     ])
    //   }
    return (
        <div class="notes" id="app">
            <div class="sidebar">
                <h1>ToDoList</h1>

                <Form
                    add={add}
                />
            </div>

            <div class="container">

                {/* Need to do notes container  */}
                <div class="App note_container" >
                    {console.log("map ", list.length)}

                    {list.map((note) => {
                        return (
                            <Note
                                note={note}
                                key={note.id}
                                remove={remove}
                            />
                        )
                    })}
                </div>
 
            </div>

        </div>
    );
}

export default App;
