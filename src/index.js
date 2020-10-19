import {createStore} from 'redux';

const form = document.querySelector('form'),
input = document.querySelector('input'),
ul = document.querySelector('ul'),
ADD_TODO = 'ADD',
DEL_TODO = 'DEL';

let id = 0;

const addToDo = (text) => {
    id++
    return{
        type:ADD_TODO, text:text, id:id
    }
}

const delToDo = id =>{
    return{
        type: DEL_TODO,
        id
    }
}

const reducer = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, {text:action.text, id:action.id}]
        case DEL_TODO:
            return state.filter(toDo => toDo.id !== parseInt(action.id))
        default:
            return state
    };
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text))
}

const dispatchDelToDo = (e)=>{
    const id = e.target.parentNode.id;
    store.dispatch(delToDo(id));
}

const paintToDos = () =>{
    const toDos = store.getState();
    ul.innerHTML = '';
    toDos.forEach(todo => {
        const li = document.createElement('li'),
        btn =document.createElement('button');
        btn.innerText = 'DEL';
        btn.addEventListener('click', dispatchDelToDo);
        li.id = todo.id;
        li.innerText = todo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
}

store.subscribe(paintToDos);

const onSubmit = e =>{
    e.preventDefault();
    const toDo = input.value;
    input.value = '';
    dispatchAddToDo(toDo);
};

form.addEventListener('submit', onSubmit);