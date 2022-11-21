export default function Stories() {

    const storiesArray = [
        { name: "9gag", link: "./assets/img/9gag 1.jpg" },
        { name: "nathanwpylestrangeplanet", link: "./assets/img/nathanwpylestrangeplanet 1.jpg" },
        { name: "wawawiwacomicsa", link: "./assets/img/wawawiwacomicsa 1.jpg" },
        { name: "respondeai", link: "./assets/img/respondeai 1.jpg" }
    ]

    return (
        <div className="story-container">
            {storiesArray.map(x => <Story key={x.name} name={x.name} link={x.link}/>)}
        </div>
    )
}

function Story(props) {
    return (
        <div className="story-block">
            <div className="story-border">
                <img className="border-img" src="/./assets/img/stories_background.jpg" alt="img" />
                <div className="story-icon">
                    <a><img src={props.link} /></a>
                </div>
            </div>
            <div className="story-name">
                <a><span>{props.name}</span></a>
            </div>
        </div>
    )
}