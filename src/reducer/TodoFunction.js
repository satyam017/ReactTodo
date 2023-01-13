import React from 'react'

 function reducer(todo,action){
    console.log('todo',todo);
    switch (action.type) {
        case 'newTodo':
           return [...todo, {
            id : Date.now() + Math.floor(Math.random()),
            name:action.payload.name,
            complete:false
         }
        ]
    }
}


export default reducer
