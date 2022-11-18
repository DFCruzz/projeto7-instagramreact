import PostIcons from "./PostIcons"

export default function Posts() {

    const postsArray = [
        { name: "9GAG", user: "./assets/img/9gag 1.jpg", post: "./assets/img/SeekeroftheCosmos.jpg" },
        { name: "meowed", user: "./assets/img/meowed 1.jpg", post: "./assets/img/gato-telefone 1.jpg" },
        { name: "barked", user: "./assets/img/barked 1.jpg", post: "./assets/img/dog 1.jpg" },
    ]

    return (
        <div class="post-container">
            {postsArray.map(x => <Post name={x.name} user={x.user} post={x.post} />)}
        </div>
    )
}

function Post(props) {
    return (
        <div class="post-box">
            <div class="post-top">
                <div class="post-left">
                    <img src={props.user} />
                    <p>{props.name}</p>
                </div>
                <div>
                    <a><ion-icon name="ellipsis-horizontal"></ion-icon></a>
                </div>
            </div>
            <div class="post-image">
                <img src={props.post} />
            </div>
            <PostIcons />
        </div>
    )
}