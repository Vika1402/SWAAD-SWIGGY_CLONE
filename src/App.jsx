import "./index.css";
import Header from "./components/Header";
import Category from "./components/Category";
import TopRest from "./components/TopRest";
import OnlineDelivery from "./components/OnlineDelivery";
import Locations from "./components/Locations";

function App() {
  return <>
   <Header></Header>
   <Category/>
   <TopRest/>
   <OnlineDelivery/>
   <Locations/>
  </>;
}

export default App;
