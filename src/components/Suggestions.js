export default function Suggestions() {
    const suggestionsArray = [
        { name: "bad.vibes.memes", image: "./assets/img/badvibesmemes 1.jpg", status: "Segue Você" },
        { name: "chibirdart", image: "./assets/img/chibirdart 1.jpg", status: "Segue Você" },
        { name: "razoesparaacreditar", image: "./assets/img/razoesparaacreditar 1.jpg", status: "Novo no Instagram" },
        { name: "adorable_animals", image: "./assets/img/adorableanimals 1.jpg", status: "Segue Você" },
        { name: "smallcutecats", image: "./assets/img/smallcutecats 1.jpg", status: "Segue Você" }
    ]

    return (
        <div className="suggestions-preview">
            {suggestionsArray.map(x => <Suggestion key={x.name} name={x.name} image={x.image} status={x.status} />)}
        </div>
    )
}

function Suggestion(props) {
    return (
        <div className="suggestion-box">
            <div className="user-profile smaller">
                <div className="suggestion-image">
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="user-id">
                <div className="nickname">{props.name}</div>
                <div className="profile-status">{props.status}</div>
            </div>
            </div>
            <div className="follow-button">Seguir</div>
        </div>
    )
}