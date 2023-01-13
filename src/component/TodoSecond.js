import React, {useReducer,useState} from 'react'
import reducer from '../reducer/TodoFunction';
import './Todo.css';
function TodoSecond() {
    const [todos, dispatch] = useReducer(reducer , [])
    const [name, setName] = useState('')
    const handelSubmit =(e)=>{
        e.preventDefault();
        dispatch({type : 'newTodo' , payload : {name : name}})
        setName('');
    }
    console.log('Todo',todos); 
  return (
    <div>
    <div className="header">
        <h1>To do list</h1>
    </div>
    <div className="container">
        <div className="container-tasks">
            
            <form onSubmit={handelSubmit}>
                <div className="input-field">
                    <input placeholder="Enter your new todo" value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }}></input>
                    
                    <i className="bx bx-plus note-icon"></i>
                </div>
            </form>
            <ul className="todoLists">
                {todos.map((el) => {
                    console.log(el.name);

                    return(
                        <li className="list pending" >
                        <div >
                            <input type="checkbox"/>
                            <span className="task">{el.name}</span>
                        </div>
                        <i className="bx bx-trash" ></i>
                    </li>
                    )
                    
                })}
            </ul>


            <div className="pending-tasks">
                <span>You have <span className="pending-num"> </span> tasks pending.</span>
                <a className="clear-button">Clear All</a>
            </div>

        </div>
    </div>
</div>
  )
}

export default TodoSecond
