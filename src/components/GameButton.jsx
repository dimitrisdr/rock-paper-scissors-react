import { useContext, useState } from "react"
import { mainContext } from "../context"

export default function GameButton({name, computersChoice}) {

    const  {setGameChoices} = useContext(mainContext)
    const [isDisabled, setIsDisabled] = useState(false)

    function handleClick () {
        setGameChoices({user: name, computer: computersChoice}) 
        setIsDisabled(true)
    }
    return (
        <button className="game-element__btn" 
                disabled={isDisabled} 
                aria-label={`${name} button`}>
            <img 
                src={`public/images/icon-${name}.svg`}
                alt={`${name} image`} 
                className="img game-el-img"
                aria-label={`${name} button image`}
                onClick={handleClick}
            />
        </button>
    )
};
