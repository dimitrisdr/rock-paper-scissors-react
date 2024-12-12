import MainTitle from "./MainTitle"
import ScoreComp from "./ScoreComp"

export default function Header() {

    return (
        <header className="main-header flex-item outline-dark">
            <MainTitle />
            <ScoreComp />    
        </header>
    )
};
