import React, { useState, useEffect } from 'react';
import InputValue from '../InputValue/InputValue';
import UnitSelector from '../UnitSelector/UnitSelector';
import SwapButton from '../SwapButton/SwapButton';
import ConvertedValue from '../ConvertedValue/ConvertedValue';
import ExtensionNote from '../ExtensionNote/ExtensionNote';
import styles from './UnitConverter.module.css';

const temperatureUnits = [
    {value : 'celsius' , label: 'celsius'},
    {value: 'fahrenheit', label: 'fahrenheit'},
]





const UnitConverter = () =>{
    const [inputValue, setInputValue] = React.useState('');
    const [fromUnit, setFromUnit] = React.useState('celsius');
    const [toUnit, setToUnit] = React.useState('fahrenheit');
    const [convertedValue, setConvertedValue] = React.useState('');


    const convertTemperature = (value, from , to) =>{
       const numValue = parseFloat(value)
        if(isNaN(numValue)){
            return '';
        }

        let result ;
        if (from === 'celsius' && to === 'fahrenheit') {
            result = (numValue * 9/5) + 32;
        } else if (from === 'fahrenheit' && to === 'celsius') {
            result = (numValue - 32) * 5/9;
        } else if (from === to) {
            result = numValue;
        } else {
            return 'N/A';
        }
        return result.toFixed(2);
    };

    // useEffect hook to re-run conversion whenever inputs change
    useEffect(() => {
        const result = convertTemperature(inputValue, fromUnit, toUnit);
        setConvertedValue(result);
    }, [inputValue, fromUnit, toUnit]);

    // Event handlers (still defined here as they manage this component's state)
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFromUnitChange = (event) => {
        setFromUnit(event.target.value);
    };

    const handleToUnitChange = (event) => {
        setToUnit(event.target.value);
    };

    const swapUnits = () => {
        const tempFrom = fromUnit;
        setFromUnit(toUnit);
        setToUnit(tempFrom);
    };

    return (
        <div className={styles.converterContainer}>
            <h1>Unit Converter</h1>

            {/* Input Value Component */}
            <InputValue
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter value"
            />

            <div className={styles.unitSelectionGroup}>
                {/* From Unit Selector Component */}
                <UnitSelector
                    label="From"
                    id="from-unit"
                    value={fromUnit}
                    onChange={handleFromUnitChange}
                    units={temperatureUnits}
                />

                {/* Swap Button Component */}
                <SwapButton onClick={swapUnits} />

                {/* To Unit Selector Component */}
                <UnitSelector
                    label="To"
                    id="to-unit"
                    value={toUnit}
                    onChange={handleToUnitChange}
                    units={temperatureUnits}
                />
            </div>

            {/* Converted Result Component */}
            <ConvertedValue value={convertedValue} />

            {/* Extension Note Component */}
            <ExtensionNote />
        </div>
    );
}

export default UnitConverter;

