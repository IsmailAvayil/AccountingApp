import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({count}) {
  const hadleButtons=()=>{
    alert("Sorry,Access Denied!")
  }
  return (
    <div>
      <div className="App-Header">
        <div className="App-title">
          <div className="item-count">
            <h3>Item Master</h3>
            <div className="count">{count}</div>
          </div>
          <p>Keep track of your items.</p>
        </div>

        <div className="Header-Buttons">
          <button className="ui primary small button" onClick={hadleButtons}>Print</button>
          <button className="ui primary small button" onClick={hadleButtons}>Export</button>
          <button className="ui primary small button" onClick={hadleButtons}>Send</button>
          <button className="ui primary small button" onClick={hadleButtons}>Create</button>
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",height:"150px",alignItems:"center",margin:"10px",padding:"10px"}}>
        <div style={{display:"flex",flexDirection:"row",width:"300px",justifyContent:"space-around"}}>
          <div>
            <h5 style={{ padding: "0px", margin: "0px" }}>Search By</h5>
            <select className="ui dropdown">
              <option value="">All</option>
              <option value="1">#</option>
              <option value="0">#</option>
            </select>
          </div>
          <div>
            <h5 style={{ padding: "0px", margin: "0px" }}>Sort By</h5>
            <select className="ui dropdown">
              <option value="">All</option>
              <option value="1">#</option>
              <option value="0">#</option>
            </select>
          </div>
          <div>
            <h5 style={{ padding: "0px", margin: "0px" }}>Sort Order</h5>
            <select className="ui dropdown">
              <option value="">Ascending</option>
              <option value="1">#</option>
              <option value="0">#</option>
            </select>
          </div>
        </div>
        <div>
          <button   className="ui primary small button" > 
          <Link to="/ShowItems" style={{color:"white"}}>
            Show
          </Link></button>
          <button className="ui primary small button" onClick={hadleButtons}>Clear</button>

        </div>
      </div>
    </div>
  );
}

export default Header;
