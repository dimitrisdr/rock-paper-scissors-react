export default function GameButton({name}) {
    return (
        <button className="game-element__btn" aria-label={`${name} button`}>
            <img 
                src={`public/images/icon-${name}.svg`}
                alt={`${name} image`} 
                className="img game-el-img"
                aria-label={`${name} button image`}
            />
        </button>
    )
};
