import Main from "./components/Main";
import About from './components/About'
import Buns from "./components/Buns";



function App() {
  return (
    <header className="w-100">
    <div className="container w-[1478px] m-auto">
      <Main/>
      <About/>
      <Buns/>
    </div>
    </header>
  );
}


export default App;
