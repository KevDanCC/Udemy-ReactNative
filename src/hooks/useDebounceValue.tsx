import { useEffect, useState } from 'react';

export const useDebounceValue = (input: string = '', time: number = 500) => {

    const [debounceValue, setDebaounceValue] = useState(input);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebaounceValue(input);
        }, time);

        return () => {
            clearTimeout(timeout)
        }
    }, [input])

    return debounceValue;
}
