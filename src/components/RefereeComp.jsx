import { useContext } from "react"
import { mainContext } from "../context"

export default function RefereeComp({showChoice}) {

    const {setGameChoices, gameChoices, gameElements, setScore, score} = useContext(mainContext)
    const {user, computer} = gameChoices;
    const winner = gameElements.indexOf(user) < gameElements.indexOf(computer)? 'YOU WIN!': 'YOU LOSE!'
    const newScore = winner === 'user'? score + 1 : score - 1
    setScore(newScore)
    
    function handleClick() {
        setGameChoices({ user: '', computer: '' })
    }

    return (
        <section className="referee-section grid-item">
            <h2 className="descision-text fs-700 fw-700">{winner}</h2>
            <button onClick={handleClick} className="btn play-again-btn letter-sp-2 txt-dark">PLAY AGAIN</button>
        </section>
    )
};
