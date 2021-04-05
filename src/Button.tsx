import React, {MouseEvent} from "react";

type propsType = {
    counter: number
    buttonName: string
    incValue: (counter: number) => void
    resetValue: (counter: number) => void
}

export const Button = (props: propsType) => {

    const choiceButton = () => {
        if((props.counter === 5 && props.buttonName === "inc") || (props.counter === 0 && props.buttonName === "reset")) {
            return true;
        } else {
            return false;
        }
    }
    const choiceFunction = (e: MouseEvent<HTMLButtonElement>) => props.buttonName === "inc" ? props.incValue(props.counter) : props.resetValue(props.counter)

    return (
        <button disabled={choiceButton()}
                className="buttons"
                onClick={choiceFunction}>
            {props.buttonName}
        </button>
    );
}