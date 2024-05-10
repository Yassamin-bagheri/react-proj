import MainComponent from "./components/MainComponent";
import Navbar from "./components/Navbar";

function App() {
  const samplData = [
    {id:1 , body:"sample 1"},
    {id:2 , body:"sample 2"},
    {id:3 , body:"sample 3"},
    {id:4 , body:"sample 4"},
  ];

  return (
    <div>
      <Navbar />
      <MainComponent data={samplData}/>
    </div>
  );
}

export default App;
