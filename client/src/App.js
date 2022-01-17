//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//components
import Temp from "./Components/temp";
import HomeLayout from "./Layout/Home.layout";

function App(){
  return (
    <>
    <HomeLayout path="/" exact component={Temp} />
    </>
  )
}

export default App;
