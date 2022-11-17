export default function Story() {

    const storiesArray = [
        { name: "9gag", link: "./assets/img/9gag 1.jpg" },
        { name: "nathanwpylestrangeplanet", link: "./assets/img/nathanwpylestrangeplanet 1.jpg" },
        { name: "wawawiwacomicsa", link: "./assets/img/wawawiwacomicsa 1.jpg" },
        { name: "respondeai", link: "./assets/img/respondeai 1.jpg" }
    ] 

    return (
        <div class="story-container">
            {storiesArray.map((x) =>
                <div class="story-block">
                    <div class="story-border">
                        <img class="border-img" src="/./assets/img/stories_background.jpg" alt="img" />
                        <div class="story-icon">
                            <a href="/#"><img src={x.link} alt="img" /></a>
                        </div>
                    </div>
                    <div class="story-name">
                        <a href="/#"><span>{x.name}</span></a>
                    </div>
                </div>
            )}
        </div>
    )
}