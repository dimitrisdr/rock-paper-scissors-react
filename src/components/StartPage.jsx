import { useState, useRef, useContext } from "react";
import GameButton from "./GameButton"
import { useEffect } from "react";
import { mainContext } from "../context";

export default function StartPage() {

    const [radius, setRadius] = useState(400);
    const imgRef = useRef();

    const {gameElements} = useContext(mainContext)
    const computersChoice = gameElements[Math.floor(Math.random()*gameElements.length)]
    
    useEffect(()=> {
        const pentagonImg = imgRef.current 
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setRadius(entry.contentRect.width / 2)
            }
        })
        if (pentagonImg) observer.observe(pentagonImg)

        return () => {if (pentagonImg) observer.unobserve(pentagonImg)}
    })

    return (
        <ul className="game-elments fadeIn">
            <img ref={imgRef} 
                 src="/rock-paper-scissors-react/images/bg-pentagon.svg" 
                 alt="Pentagon Image" 
                 className="img pentagon-img" />
                 
                {gameElements.map(
                    (e, i) => {
                        const angleInRadians = ((72 * i - 90) * Math.PI) / 180;
                        const xCor = radius * Math.cos(angleInRadians);
                        const yCor = radius * Math.sin( angleInRadians);
                    return (
                        <li key={e}
                            className="game-element" 
                            style={{
                                '--custom-clr':`var(--${e})`,
                                '--pos': i,
                                top: `calc(50% + ${yCor}px)`,
                                left: `calc(50% + ${xCor}px)`,
                            }}>
                            <div className="img-container">
                                <GameButton name={e} computersChoice={computersChoice} isDisabled={false}/>
                            </div>
                        </li>
                        )
                    }
                )}
        </ul>
    )
};


