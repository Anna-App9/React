import {useState} from 'react';




//used to avoid multiple useState used in Forms!
export const useForm = (initialValue)=>{
    const [value,setValue] =useState(initialValue);

    return[
        value,
        (event)=>{
            setValue({
                ...value,
                [event.target.name]:event.target.value,
            });

        }

    ];
        


}