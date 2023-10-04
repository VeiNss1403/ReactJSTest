import React from 'react';
import { WrapperInputStyle } from './style';

const InputFrom = (props) => {
    const handleOnchangeInput = (e) => {
        props.onChange(e.target.value);
    }
    const { placeholder, ...rests } = props;
    return (
        <div>
            <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />
        </div>
    )
}
export default InputFrom