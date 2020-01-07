import React, { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import {useBoolean} from '../../Hooks/useBoolean';
import {useArray} from '../../Hooks/useArray';
import useWindowWidth from '../../Hooks/useWindowWidth'

const Cart = () => {
    const data = useFetch('https://jsonplaceholder.typicode.com/todos');
    const showCounter = useBoolean(true);
    const todos = useArray(['hi','there', 'sup', 'world']);
    let width = useWindowWidth();
    
    useEffect(() => {
        console.log(width)
    },[width])
    return (
        <>
        <div id="scroll">
            {width}
        </div>
        <div>
            <h3> Todos</h3>
            <button onClick = {() => todos.add(Math.random())}> Add </button>
            <ul>
                {todos.value.map((todo,i) => {
                    return (<p key={i}>{todo}
                    <button onClick={()=> todos.removeIndex(i)}>Delete</button></p>)
                })}
            </ul>
            <button onClick={todos.clear}>Clear todos</button>
        </div>
        <div>
            {showCounter.value ? <ul>
                {data.map(el => (
                    <li key = {el.id}> {el.title}</li>
                ))}
            </ul>: null}
            <button onClick = {showCounter.toggle}> Toggle </button>
        </div>
        </>
    )
}

export default Cart