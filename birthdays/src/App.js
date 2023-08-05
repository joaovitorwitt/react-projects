import Button from "./components/Button";
import Title from "./components/Title";
import "./index.css";

function App() {
  return (
    <>
      <Title></Title>

      <Button
        classname={"main-button"}
        bgColor={"black"}
        text={"im black"}
        textColor={"white"}
      ></Button>
    </>
  );
}

export default App;
