import Header from "./Header";
import MainContainer from "./MainContainer";
import SideContainer from "./SideContainer";

export default function App() {
    return (
        <div>
            <Header />
            <div className="body-container">
                <MainContainer />
                <SideContainer />
            </div>
        </div>
    )
}