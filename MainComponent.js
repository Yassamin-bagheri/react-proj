import Panel from "./Panel";
import Sidebar from "./Sidebar";

const MainComponent = (props) => {
    console.log(props);
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
      <Panel postData = {props.data}/>
    </div>
    </div>
  );
};

export default MainComponent;
