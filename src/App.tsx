import arrowDown from "./assets/arrowDown.svg";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <>
      <Button white={false} icon={arrowDown}>
        Выход
      </Button>
    </>
  );
}

export default App;
