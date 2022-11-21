import React from "react"

export default function Posts() {


    const postsArray = [
        { name: "9GAG", user: "./assets/img/9gag 1.jpg", post: "./assets/img/SeekeroftheCosmos.jpg", likes: 3284},
        { name: "meowed", user: "./assets/img/meowed 1.jpg", post: "./assets/img/gato-telefone 1.jpg", likes: 927},
        { name: "barked", user: "./assets/img/barked 1.jpg", post: "./assets/img/dog 1.jpg", likes: 671},
    ]

    return (
        <div className="post-container">
            {postsArray.map(x => <Post key={x.name} name={x.name} user={x.user} post={x.post} />)}
        </div>
    )
}

function Post(props) {

    const [savedPost, setSavedPost] = React.useState("heart-outline")
    const [bookmarked, setBookmarked] = React.useState("bookmark-outline")
    const [like, setLike] = React.useState(523)

    function likeOnDbClick() {
        if (savedPost === "heart-outline") {
            setSavedPost("heart")
            setLike(like + 1)
        }
        else {
            console.log(like)
        }
    }

    function savePost() {
        if (savedPost === "heart-outline") {
            setSavedPost("heart")
            setLike(like + 1)
        }
        else {
            setSavedPost("heart-outline")
            setLike(like - 1)
        }
    }

    function bookmarkPost() {
        if (bookmarked === "bookmark-outline") {
            setBookmarked("bookmark")
        }
        else {
            setBookmarked("bookmark-outline")
        }
    }


    return (
        <div data-test="post" className="post-box">
            <div className="post-top">
                <div className="post-left">
                    <img src={props.user} alt={props.name} />
                    <p>{props.name}</p>
                </div>
                <div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div onDoubleClick={likeOnDbClick} className="post-image">
                <img data-test="post-image" src={props.post} alt={props.name}/>
            </div>
            <div className="post-bottom">
                <div className="bottom-icons">
                    <div className="left-icons">
                        <ion-icon data-test="like-post" onClick={savePost} name={savedPost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div className="right-icons">
                        <ion-icon data-test="save-post" onClick={bookmarkPost} name={bookmarked}></ion-icon>
                    </div>
                </div>
                <div class="bottom-comments">
                <img src="./assets/img/Diego.jpg" alt="" />
                <p>
                    Curtido por <b>DFCruzz</b> e <b>outras <span data-test="likes-number" >{like}</span> pessoas</b>
                </p>
            </div>
            </div>
        </div>
    )
}