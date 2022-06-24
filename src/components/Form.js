import React, {useEffect} from "react"
//need unique uuid foe each to do list in the array
import {v4 as uuidv4} from "uuid"

const Form = ({input, setInput, todo, setTodo, editTodo, setEditTodo}) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todo.map((todo) =>
        todo.id === id ? {title, id, completed} : todo
        );
        setTodo(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title);
        } else{
            setInput("")
        }
    }, [setInput, editTodo]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };


    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodo([...todo, {
            id: uuidv4(), 
            //user input
            title: input, 
            completed: false
            }]);
            setInput("");
        }
        else{
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    }
    return(
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder="Input To-Do-List..." 
            className="task-input"
            value={input}
            required
            onChange={onInputChange}
            />
            <button className="button-add" type="submit">
                {editTodo ? "Ok" : "Add"}
            </button>
           
        </form>
    )
}

export default Form;