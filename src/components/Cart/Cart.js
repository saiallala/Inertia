import React, { useEffect, useReducer } from 'react';
import useFetch from '../../Hooks/useFetch';
import {useBoolean} from '../../Hooks/useBoolean';
import {useArray} from '../../Hooks/useArray';
import useWindowWidth from '../../Hooks/useWindowWidth';
import {counterReducer} from '../../Hooks/counterReducer';

const initialState = {count: 0};

const divStyle = {
    textAlign: 'left',
    border: '5px solid pink'
  };

const Cart = () => {
    const data = useFetch('https://jsonplaceholder.typicode.com/todos');
    const showCounter = useBoolean(true);
    const todos = useArray(['hi','there', 'sup', 'world']);
    let width = useWindowWidth();
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const handleIncrease = () => {
        dispatch({type: 'INC'});
    };
    
    const handleDecrease = () => {
        dispatch({type: 'DEC'});
    };

    useEffect(() => {
        console.log(width)
    },[width])
    return (
        <>
         <div style = {divStyle}>
            <h1>Counter</h1>
            <h2>{state.count}</h2>
            <button type="button" onClick = {handleIncrease}>++++</button>
            <button type="button" onClick = {handleDecrease}>----</button>
        </div>
        <div style = {divStyle} id="scroll">
            {width}
        </div>
        <div style = {divStyle}>
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
        <div style = {divStyle}>
        <button onClick = {showCounter.toggle}> Toggle </button>
            {showCounter.value ? <ul>
                {data.map(el => (
                    <p key = {el.id}> {el.title}</p>
                ))}
            </ul>: null}
        </div>
        </>
    )
}

export default Cart