export default function Suggestions() {
    const suggestionsArray = [
        { name: "bad.vibes.memes", image: "./assets/img/badvibesmemes 1.jpg", status: "Segue Você" },
        { name: "chibirdart", image: "./assets/img/chibirdart 1.jpg", status: "Segue Você" },
        { name: "razoesparaacreditar", image: "./assets/img/razoesparaacreditar 1.jpg", status: "Novo no Instagram" },
        { name: "adorable_animals", image: "./assets/img/adorableanimals 1.jpg", status: "Segue Você" },
        { name: "smallcutecats", image: "./assets/img/smallcutecats 1.jpg", status: "Segue Você" }
    ]

    return (
        <div class="suggestions-preview">
            {suggestionsArray.map(x => <Suggestion name={x.name} image={x.image} status={x.status} />)}
        </div>
    )
}

function Suggestion(props) {
    return (
        <div class="suggestion-box">
            <div class="user-profile smaller">
                <div class="user-image">
                    <img src={props.image} />
                </div>
                <div class="user-id">
                <div class="nickname">{props.name}</div>
                <div class="profile-status">{props.status}</div>
            </div>
            </div>
            <div class="follow-button">Seguir</div>
        </div>
    )
}


<div class="suggestion-box">
    <div class="user-profile smaller">
        <div class="user-image">
            <img src="./assets/img/badvibesmemes 1.jpg" alt="badvibesmemes" />
        </div>
        <div class="user-id">
            <div class="nickname">bad.vibes.memes</div>
            <div class="profile-status">Segue você</div>
        </div>
    </div>
    <div class="follow-button">Seguir</div>
</div>