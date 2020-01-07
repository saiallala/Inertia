import { useState } from 'react';

    export const useBoolean = initial => {
        const [value, setValue] = useState(initial);
        return{
            value,
            setValue,
            toggle: ()=> setValue(v => !v),
            setTrue: () => setValue(true),
            setFalse: () => setValue(false)
        }
    }
