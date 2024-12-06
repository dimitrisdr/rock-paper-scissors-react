import { useState, useRef } from "react";
import GameButton from "../components/GameButton"
import { useEffect } from "react";

export default function StartPage() {

    const [radius, setRadius] = useState(400);
    const imgRef = useRef();

    const gameElements = [

        {name:'scissors', color:'Scissors'}, 
        {name:'paper', color:'Paper'}, 
        {name:'rock', color:'Rock'}, 
        {name:'lizard', color:'Lizard'},
        {name:'spock', color:'Spock'}

    ]

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
        <ul className="game-elments">
            <img ref={imgRef} 
                 src="public/images/bg-pentagon.svg" 
                 alt="Pentagon Image" 
                 className="img pentagon-img" />
                 
                {gameElements.map(
                    (e, i) => {
                        const angleInRadians = ((72 * i - 90) * Math.PI) / 180;
                        const xCor = radius * Math.cos(angleInRadians);
                        const yCor = radius * Math.sin( angleInRadians);
                    return (
                        <li key={e.name}
                            className="game-element" 
                            style={{
                                '--custom-clr':`var(--${e.color})`,
                                '--pos': i,
                                top: `calc(50% + ${yCor}px)`,
                                left: `calc(50% + ${xCor}px)`,
                            }}>
                        <div className="img-container">
                            <GameButton name={e.name} />
                        </div>
                    </li>
                    )
                }
                )}
        </ul>
    )
};


