import { useContext } from "react"
import { mainContext } from "../context"


export default function RulesCard() {

    const {dialogRef} = useContext(mainContext)
    
    function handleClick() {
        dialogRef.current.close();
    }

    return (
        <dialog ref={dialogRef} className="rules-card fadeIn">
            <div className="dialog-content grid-item">
                <h2 className="title rules-title fw-700">Rules</h2>
                <div className="img-container close-img-container">
                    <img src="public\images\image-rules-bonus.svg" alt="Rules image" className="img rules-img" />
                </div>
                <button 
                    className="btn close-rules-btn" 
                    aria-label="close icon button"
                    onClick={handleClick}>
                    <img src="public/images/icon-close.svg" alt="close Icon" className="img close-icon-img" />
                </button>      
            </div>  
        </dialog>
    )
};
