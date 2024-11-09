import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector

const useStateWithCallback = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);

    const setValueAndCallback = (newValue: any, callback: any) => {
        setValue((prevValue: any) => {
            if (callback) {
                callback(prevValue, newValue);
            }
            return newValue;
        });
    };

    return [value, setValueAndCallback];
}

export { useStateWithCallback};