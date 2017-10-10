import React from 'react';
import ReactDOM from 'react-dom';
import Senators from './comps/Senators.jsx';

const GatherComp = () => {
  const gather = { textAlign: "center", backgroundColor: "rgb(135, 255, 242)", margin: "0px 15%", padding: "15px 50px" }
  return(
    <div style={gather}>
      <h1>U.S. Senators</h1>
      <hr/>
      <Senators />
    </div>
  )
}

ReactDOM.render(<GatherComp />, document.getElementById("root"));
