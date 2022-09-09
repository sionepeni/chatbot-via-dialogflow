import "./App.css";
import Body from "./components/Body";
import Uploader from "./components/Uploader";

const logo = "/images/turners-log.png";

function App() {
    return (
        <>
            <Body />
            {/* <Uploader /> */}
            <img src="/images/turners.png" width={2540} />;
            <df-messenger
                intent="WELCOME"
                chat-title="Turners-Online-Team"
                agent-id="4d83a51c-de5f-475c-b09d-58fc2514ff98"
                language-code="en"
                chat-icon={logo}
            ></df-messenger>
        </>
    );
}

export default App;
