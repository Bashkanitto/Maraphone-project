import Main from "./components/Main";
import About from './components/About'
import Buns from "./components/Buns";
import Review from './components/Review';
import Ways from "./components/Ways";



function App() {
  return (
    <header className="w-100">
    <div className="container w-[1478px] m-auto">
      <Main/>
      <About/>
      <Buns/>
      <Review/>
      <Ways/>
    </div>
    </header>
  );
}


export default App;
