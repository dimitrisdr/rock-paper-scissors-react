export default function StartPage() {
    const gameElements = [
        {name:'scissors', color:'Scissors'}, 
        {name:'paper', color:'Paper'}, 
        {name:'rock', color:'Rock'}, 
        {name:'lizard', color:'Lizard'}, {name:'spock', color:'Spock'}]

    return (
        <ul className="game-elments">
            <img src="public/images/bg-pentagon.svg" alt="" className="img pentagon-img" />
            {gameElements.map((e, i) => 
            <li key={e.name} className="game-element" style={{'--custom-clr':`var(--${e.color})`, '--pos': i}}>
                <div className="img-container">
                    <button className="game-element__btn">
                        <img 
                            src={`public/images/icon-${e.name}.svg`}
                            alt={`${e.name} image`} 
                            className="img game-el-img"
                        />
                    </button>
                </div>
            </li>
            )}
        </ul>
    )
};
