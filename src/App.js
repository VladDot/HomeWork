import "./App.css";
import Users from "./components/Content/Users/component";
import Main from "./components/Content/component";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/component";
import Wrapper from "./components/Wrapper/component";

function App() {
    return (
        <div>
            <Wrapper>
                <Header />
                <Main />
                <Footer />
            </Wrapper>
        </div>
    );
}

export default App;
