const postsArray = [
    { name: "9GAG", user: "./assets/img/9gag 1.jpg", post:"./assets/img/SeekeroftheCosmos.jpg" },
    { name: "meowed", user: "./assets/img/meowed 1.jpg", post:"./assets/img/gato-telefone 1.jpg" },
    { name: "barked", user: "./assets/img/barked 1.jpg", post:"./assets/img/dog 1.jpg" },
]

function PostIcons() {
    return (
        <div class="post-bottom">
            <div class="bottom-icons">
                <div class="left-icons">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="right-icons">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}


export default function Posts () {
    return (
        <div class="post-container">
            {postsArray.map(x =>
                <div class="post-box">
                    <div class="post-top">
                        <div class="post-left">
                            <img src={x.user} alt="img" />
                            <p>{x.name}</p>
                        </div>
                        <div class="post-right">
                            <a href="/#">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </a>
                        </div>
                    </div>
                    <div class="post-image">
                        <img src={x.post} alt="img" />
                    </div>
                    <PostIcons />
                </div>
            )}
        </div>
    )
}