import React, { useEffect, useState } from 'react';
import './FormDesign.css';
import Input from '../Input';
import { Button } from '../../Button/Button';

const Select = (props) => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const backForm = e => {
        e.preventDefault();
        props.prevStep();
    };

    useEffect(() => {
        console.log("selected option: ", selectedOption)
        props.resumeTypeSetter(selectedOption);
    }, [selectedOption])

    return (
        <form onSubmit={props.formSubmitted}>
            <div className='buttons display-flex justify-content-between'>
            <span className='btn-left' onClick={backForm}>
                <Button content="Previous" />
            </span>
            <div className="radio-buttons">
                <div className='d-flex'>
                    <input
                        className='cursor-pointer'
                        style={{ width: "10%" }}
                        type="checkbox"
                        name="option"
                        value="resume2"
                        id='resume2'
                        checked={selectedOption === "resume2"}
                        onChange={handleOptionChange}
                    />
                    <span style={{ width: "70%" }}>
                        Single-Column
                    </span>
                </div>
                <div className='d-flex'>
                    <input
                        className='cursor-pointer'
                        style={{ width: "10%" }}
                        type="checkbox"
                        name="option"
                        value="resume1"
                        id='resume1'
                        checked={selectedOption === "resume1"}
                        onChange={handleOptionChange}
                    />
                    <span style={{ width: "70%" }}>
                        Multi-Column
                    </span>
                </div>
            </div>
            <span className='btn-right'>
                <button className='add-btn' type='submit'>Submit</button>
            </span>
        </div>
        </form >
    );

};
export default Select;