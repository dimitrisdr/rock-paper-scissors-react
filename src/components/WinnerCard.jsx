import { useContext, useState, useEffect } from "react"
import GameButton from "./GameButton"
import ReferreComp from './RefereeComp'
import { mainContext } from "../context"

export default function WinnerCard() {
    
    const {gameChoices} = useContext(mainContext)
    const [showChoice, setShowChoice] = useState(false)
    
    useEffect(()=> {
        const timeOut = setTimeout(() => {
            setShowChoice(true)
        }, 800);
        return () => clearTimeout(timeOut)
    }, [setShowChoice])


    return (
        <section className="winner-card grid-item">
            <div className="game-slot user-choice grid-item">
                <span className="player-title">YOU PICKED</span>
                <div className="game-element-container">
                    <div className="game-element" 
                        style={{
                                '--custom-clr':`var(--${gameChoices.user})`,
                            }}>
                        <div className="img-container">
                            <GameButton name={gameChoices.user} isDisabled={true} />
                        </div>
                    </div>
                </div>
            </div>
            <ReferreComp showChoice={showChoice} />
            <div className="game-slot computer-choice grid-item">
                <span className="player-title">HOUSE PICKED</span>
                {showChoice && 
                <div className="game-element-container">
                    <div className="game-element" 
                        style={{'--custom-clr':`var(--${gameChoices.computer})` }}>
                        <div className="img-container">
                            <GameButton name={gameChoices.computer} isDisabled={true}/>
                        </div>
                    </div>
                </div>
                }

                {!showChoice && <div className="empty-slot"></div>}
            </div>
        </section>
    )
};
