import logo from "./logo.svg";
import "./App.css";
// import Rafik from "./Component/Rafik";
// import Shahbaz from "./Component/Shahbaz";
// import { Formsubmit } from "./Component/Formsubmit";
// import { TodoList } from "./Component/Compound/TodoList";
// import { Counter } from "./Component/Compound/Counter";
// import { Sample } from "./Component/State/Reducer/SampleReducer";
// import Home from  "./Component/Compound/Home";
// import Product from "./Component/Projects eCart/Product";
// import { store } from "./Component/State/Store/Store";
import CounterParent from "./Component/Class/CounterParent";

function App() {
  return (
    <div className="App">
      {/* <Product store={store} /> */}
        {/* <Home/> */}
        {/* <TodoList/> */}
        {/* <Counter/> */}
        {/* <Rafik/> */}
        {/* <Shahbaz/> */}
        {/* <Formsubmit/> */}
        <CounterParent/>
    </div>
  );
}

export default App;
