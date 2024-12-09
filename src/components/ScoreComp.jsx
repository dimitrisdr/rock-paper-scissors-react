import { useContext } from "react"
import { mainContext } from "../context"

export default function ScoreComp() {
    const {score} = useContext(mainContext)
    return (
        <div className="score-container grid-item">
            <span className="score-container__title txt-score letter-sp-2">SCORE</span>
            <span className="score-num fw-700 fs-700 txt-dark">{score}</span>
        </div>
    )
};
