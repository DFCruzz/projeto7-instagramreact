function Logo() {
    return (
        <div className="logo-container">
            <div className="logo-icon">
                <a>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </div>
            <div className="logo-divider"></div>
            <div className="logo-name">
                <a><img src="./assets/img/logo 1.jpg" alt="instagram" /></a>
            </div>
        </div>
    )
}

function SearchBar() {
    return (
        <div className="header-search">
            <div className="search-box">
                <input type="text" placeholder="Pesquisar" />
            </div>
        </div>
    )
}

function NavBar() {
    return (
        <div className="header-icons">
            <a>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </a>
            <a>
                <ion-icon name="compass-outline"></ion-icon>
            </a>
            <a>
                <ion-icon name="heart-outline"></ion-icon>
            </a>
            <a>
                <ion-icon name="person-outline"></ion-icon>
            </a>
        </div>
    )
}

export default function Header() {
    return (
        <div className="header">
            <Logo />
            <SearchBar />
            <NavBar />
        </div>
    )
}