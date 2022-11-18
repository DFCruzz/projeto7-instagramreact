export default function UserProfile() {
    let userImg = "./assets/img/Diego.jpg"
    let userName = "Diego Cruz"



    return (
        <div class="user-profile">
            <div class="user-image"><img src={userImg} alt="user" /></div>
            <div class="user-id">
                <div class="nickname">DFCruzz</div>
                <div>
                    <div class="realname">{userName}</div>
                    <div><ion-icon name="bookmark-outline"></ion-icon></div>
                </div>
            </div>
        </div>
    )
}