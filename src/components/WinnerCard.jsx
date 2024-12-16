import { useContext, useState, useEffect, useRef } from "react"
import GameButton from "./GameButton"
import ReferreComp from './RefereeComp'
import { mainContext } from "../context"

export default function WinnerCard() {

    const {gameChoices, setScore, score, gameElements, delay} = useContext(mainContext)
    const {user, computer} = gameChoices;
    const [showComputersChoice, setComputersShowChoice] = useState(false);
    const [showReferee, setShowReferee] = useState(false);
    const [winner,setWinner] = useState('');
    const userCh = useRef()
    const computerCh = useRef ()

    function findWinner(user, computer) {
        
        if (user === computer) return 'DRAW!'

        const beatRules = {
            'Scissors': ['Paper', 'Lizard'],
            'Paper': ['Rock', 'Spock'],
            'Rock': ['Lizard', 'Scissors'],
            'Lizard': ['Spock', 'Paper'],
            'Spock': ['Scissors', 'Rock']
        }
        return beatRules[user].includes(computer) ? 'YOU WIN!' :'YOU LOSE!'
    }

    function updateScore(winner, currScore) {
        if ((winner === 'YOU LOSE!' && currScore === 0) || winner === 'DRAW!') return currScore
        return winner === 'YOU WIN!' ? currScore + 1 : currScore - 1
    }

    async function  handleAnimations() {
        await delay(2000);
        setComputersShowChoice(true);
        await delay(500);
        const newWinner = findWinner(user, computer);
        setWinner(newWinner);
        userCh.current.classList.add('slideOut-l')
        computerCh.current.classList.add('slideOut-r')
        await delay(500);
        setShowReferee(true);
        const scoreUpdate = updateScore(newWinner, score);
        setScore(scoreUpdate);
    }


    useEffect(()=> {
        handleAnimations();
    }, [])


    return (
        <section className="winner-card grid-item fadeIn">
            <div ref={userCh} className="game-slot user-choice grid-item ">
                <span className="player-title">YOU PICKED</span>
                <div className={`game-element-container ${winner === 'YOU WIN!'?'winner': ''}`}>
                    <div className="game-element" 
                        style={{
                                '--custom-clr':`var(--${gameChoices.user})`,
                                '--shadow-d': `var(--${gameChoices.user}-d)`
                            }}>
                        <div className="img-container">
                            <GameButton name={gameChoices.user} isDisabled={true} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="refferee-container show-up">
                {showReferee && 
                    <ReferreComp showComputersChoice={showComputersChoice} winner={winner} />
                }
            </div>
            <div ref={computerCh} className="game-slot computer-choice grid-item">
                <span className="player-title fade-in">HOUSE PICKED</span>
                {showComputersChoice ?
                    <>
                    <div className={`game-element-container fadeIn ${winner === 'YOU LOSE!' ?'winner': ''} `}>
                    <div className="game-element" 
                        style={{
                            '--custom-clr':`var(--${gameChoices.computer})`,
                            '--shadow-d': `var(--${gameChoices.computer}-d)`
                         }}>
                        <div className="img-container">
                            <GameButton name={gameChoices.computer} isDisabled={true}/>
                        </div>
                    </div>
                    </div>
                    </>
                    :
                <div className="game-element-container ">
                    <div className="empty-slot-container">
                        <div className="empty-slot pulse"></div>
                    </div>
                </div>
                }
            </div>
        </section>
    )
};
