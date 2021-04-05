import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";

function App() {
    const [counter, setCounter] = useState<number>(0)

    const incValue = (counter: number) => {
        const updateCounter = counter + 1;
        setCounter(updateCounter)
    }
    const resetValue = (counter: number) => {
        const updateCounter = 0;
        setCounter(updateCounter)
    }

    return (
        <div className="App">
            <div className="display">
                <div className={counter === 5 ? "display-counter-red" : "display-counter"}>{counter}</div>
            </div>
            <div className="buttons-area">
                <Button buttonName="inc"
                        incValue={incValue}
                        resetValue={resetValue}
                        counter={counter}
                />
                <Button buttonName="reset"
                        incValue={incValue}
                        resetValue={resetValue}
                        counter={counter}
                />
            </div>
        </div>
    );
}

export default App;
