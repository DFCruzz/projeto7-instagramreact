export default function Stories() {

    const storiesArray = [
        { name: "9gag", link: "./assets/img/9gag 1.jpg" },
        { name: "nathanwpylestrangeplanet", link: "./assets/img/nathanwpylestrangeplanet 1.jpg" },
        { name: "wawawiwacomicsa", link: "./assets/img/wawawiwacomicsa 1.jpg" },
        { name: "respondeai", link: "./assets/img/respondeai 1.jpg" }
    ]

    return (
        <div class="story-container">
            {storiesArray.map(x => <Story name={x.name} link={x.link}/>)}
        </div>
    )
}

function Story(props) {
    return (
        <div class="story-block">
            <div class="story-border">
                <img class="border-img" src="/./assets/img/stories_background.jpg" alt="img" />
                <div class="story-icon">
                    <a href="/#"><img src={props.link} /></a>
                </div>
            </div>
            <div class="story-name">
                <a href="/#"><span>{props.name}</span></a>
            </div>
        </div>
    )
}