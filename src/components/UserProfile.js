import React from "react"

export default function UserProfile() {
    const [userName, setUserName] = React.useState("Diego Cruz")
    const [userPic, setUserPic] = React.useState("./assets/img/Diego.jpg")

    function trocarNome() {
        const inputName = prompt("Qual é o seu nome chuchu?")
        setUserName(inputName)
    }

    function trocarFoto() {
        const inputPic = prompt("Coloque o link de uma nova imagem")
        setUserPic(inputPic)
    }

    return (
        <div data-test="user" className="user-profile">
            <div data-test="profile-image" onClick={trocarFoto} className="user-image"><img src={userPic} alt="user" /></div>
            <div className="user-id">
                <div className="nickname">DFCruzz</div>
                <div className="name-box">
                    <div data-test="name" className="realname">{!userName ? "Nome inválido!" : `${userName}`}</div>
                    <div data-test="edit-name" onClick={trocarNome}><ion-icon name="pencil-outline"></ion-icon></div>
                </div>
            </div>
        </div>
    )
}