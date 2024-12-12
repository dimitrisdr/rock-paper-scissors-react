import { useContext } from "react"
import { mainContext } from "../context"

export default function RefereeComp({winner}) {

    const {setGameChoices} = useContext(mainContext)

    
    function handleClick() {
        setGameChoices({ user: '', computer: '' })
    }

    return (
        <section className="referee-section grid-item fadeIn">
            <h2 className="descision-text fs-700 fw-700 fadeIn">{winner}</h2>
            <button onClick={handleClick} className="btn play-again-btn letter-sp-2 txt-dark">PLAY AGAIN</button>
        </section>
    )
};
