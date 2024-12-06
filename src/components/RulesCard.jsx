
export default function RulesCard() {
    return (
        <section className="rules-card grid-item">
            <div className="img-container close-img-container">
                <img src="public\images\image-rules-bonus.svg" alt="Rules image" className="img rules-img" />
            </div>
            <button className="btn close-rules-btn" aria-label="close icon button">
                <img src="public/images/icon-close.svg" alt="close Icon" className="img close-icon-img" />
            </button>        
        </section>
    )
};
