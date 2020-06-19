import React from 'react';

import './Input.css';

const invalid = {
    border: '1px solid red',
    backgroundColor: '#FDA49A'
}

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = {};

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses = {invalid};
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input style={inputClasses}
                className="InputElement"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea style={inputClasses}
                className="InputElement"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select style={inputClasses}
                    className="InputElement"
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input style={inputClasses}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;