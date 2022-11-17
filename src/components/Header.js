function Logo() {
    return (
        <div class="logo-container">
            <div class="logo-icon">
                <a href="/#">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </div>
            <div class="logo-divider"></div>
            <div class="logo-name">
                <a href="/#"><img src="./assets/img/logo 1.jpg" alt="instagram" /></a>
            </div>
        </div>
    )
}

function SearchBar() {
    return (
        <div class="header-search">
            <div class="search-box">
                <input type="text" placeholder="Pesquisar" />
            </div>
        </div>
    )
}

function NavBar() {
    return (
        <div class="header-icons">
            <a href="/#">
                <ion-icon name="paper-plane-outline"></ion-icon>
            </a>
            <a href="/#">
                <ion-icon name="compass-outline"></ion-icon>
            </a>
            <a href="/#">
                <ion-icon name="heart-outline"></ion-icon>
            </a>
            <a href="/#">
                <ion-icon name="person-outline"></ion-icon>
            </a>
        </div>
    )
}

export default function Header() {
    return (
        <div class="header">
            <Logo />
            <SearchBar />
            <NavBar />
        </div>
    )
}