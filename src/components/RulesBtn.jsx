import { useContext } from "react"
import { mainContext } from "../context"

export default function RulesBtn() {
    const {dialogRef} = useContext(mainContext)
    
    return (
        <button onClick={()=> { dialogRef.current.showModal() }} 
            className="btn rules-btn letter-sp-2 txt-white">
            RULES
        </button>
    )
};
