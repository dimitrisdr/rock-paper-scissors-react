import { useContext, useState } from "react";
import { mainContext } from "../context";

export default function GameButton({ name, computersChoice, isDisabled }) {
    
    const { setGameChoices } = useContext(mainContext);

    function handleClick() {
        setGameChoices({ user: name, computer: computersChoice });    
    }

    return (
        <button
            className="game-element__btn"
            aria-label={`${name} button`}
            onClick={handleClick}
            disabled={isDisabled} 
        >
            <img
                src={`public/images/icon-${name}.svg`}
                alt={`${name} image`}
                className="img game-el-img"
                aria-label={`${name} button image`}
            />
        </button>
    );
}
