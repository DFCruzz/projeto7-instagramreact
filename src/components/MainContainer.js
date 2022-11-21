import Stories from "./Stories"
import Posts from "./Posts"

export default function MainContainer() {
    return (
        <div className="main-container">
            <Stories />
            <Posts />
        </div>
    )
}