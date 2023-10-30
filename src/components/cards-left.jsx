const CardsLeft = (props) => {
    return (
        <div className="main-container">
            <div className="container-left">
                <h2>{props.title}</h2>
                <p>{props.description}<span>{props.descr}</span></p>
                <p>{props.descriptionTwo}</p>
            </div>
        </div>
    )
};
export default CardsLeft;
