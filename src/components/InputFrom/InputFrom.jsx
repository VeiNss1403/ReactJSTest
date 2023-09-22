import React, { useState } from 'react';
import { WrapperInputStyle } from './style';

const InputFrom = (props) => {
    const [valueInput, setValueInput] = useState('')
    const { placeholder, ...rests } = props;
    return (
        <div>
            <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests} />
        </div>
    )
}
export default InputFrom