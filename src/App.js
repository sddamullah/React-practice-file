// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Navbar" abouttext="About " />
      {/* <Navbar /> */}
      <div className="container">
        <TextForm heading="Enter text in form" />
      </div>
    </>
  );
}

export default App;
