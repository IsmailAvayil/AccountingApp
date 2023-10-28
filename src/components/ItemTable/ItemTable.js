import React, { useEffect, useState } from "react";
import axios from "axios";

function ItemTable({setCount}) {
  const [items, setItems] = useState([]);
 
  useEffect(() => {
    axios
      .get(
        "https://mysaleappinventoryapi-7lfpakcp7q-el.a.run.app/api/v1/Item",
        {
          headers: {
            dbName: "tradeapptestdb",
          },
        }
      )
      .then((response) => {
        setItems(response.data.data);
        console.log(response.data.data);
        setCount(response.data.data.length)
        
      })
      .catch((error) => {
        console.error("Error fetching user list:", error);
      });
      
  }, []);
  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <table className="ui very basic table">
        <thead style={{backgroundColor:"#cce2ff",justifyContent:"center"}}>
          <tr>
            <th>ITEM NAME</th>
            <th>ITEM CODE</th>
            <th>CATEGORY NAME</th>
            <th>LANDIN COST</th>
            <th>SELLING RATE</th>
            <th>STOCK</th>
            <th></th>
          </tr>
        </thead>
        {items &&
          items.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.itemName}</td>
                {item.itemCode ? <td>{item.itemCode}</td> : <td>--</td>}
                {item.categoryName ? <td>{item.categoryName}</td> : <td>--</td>}
                <td>{item.landingCost}</td>
                {item.sellingRate ? <td>{item.sellingRate}</td> : <td>--</td>}

                <td>{item.stock}</td>

                <td>
                  <div style={{ marginLeft: "25px" }}>
                    <button className="ui primary tiny button">Edit</button>
                    <button className="ui  orange tiny button">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default ItemTable;
