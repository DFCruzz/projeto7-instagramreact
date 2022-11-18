import UserProfile from "./UserProfile";
import SuggestionMenu from "./SuggestionMenu";
import Suggestions from "./Suggestions";
import About from "./About";
import SideFooter from "./SideFooter";

export default function SideContainer() {
    return (
        <div class="side-container">
            <UserProfile />
            <SuggestionMenu />
            <Suggestions />
            <About />
            <SideFooter />
        </div>
    )
}