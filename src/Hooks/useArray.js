import {useState} from 'react';

export const useArray = initial => {
    const[value,setValue] = useState(initial);
    return {
    value,
    setValue,

    add: a => setValue (v => [...v,a]),

    addData: index => setValue(v => {
        v.add(index)
    }),

    clear: ()=>{ setValue(() => [])},

    removeById: id =>
        setValue(arr => arr.filter(v => v && v.id !== id)),
    
    removeIndex: index => setValue(v => {
        console.log(v)
        v.splice(index,1);
        return v;
    })
    }
}