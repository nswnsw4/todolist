import React, {useState} from 'react';

function Todo({item,id}){

    const [cl, setCl] = useState('todo-text');

    const changeCl = () => {
        if(cl === 'todo-text'){
            setCl('todo-text cross');
        }
        else{
            setCl('todo-text');
        }
    }

    return(
        <div>
            <h1 className={cl} onClick={changeCl}>{item}</h1>
        </div>
    )
};

export default Todo;