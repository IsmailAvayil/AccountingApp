import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ItemTable.css";

function ItemTable({ setCount }) {
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
        setCount(response.data.data.length);
      })
      .catch((error) => {
        console.error("Error fetching user list:", error);
      });
  }, []);
  return (
    <div className="Table-container">
      <table className="ui very basic table">
        <thead>
          <tr>
            <th>ITEM NAME</th>
            <th>ITEM CODE</th>
            <th>CATEGORY ID</th>
            <th>LANDING COST</th>
            <th>SELLING RATE</th>
            <th>STOCK</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        {items &&
          items.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.itemName}</td>
                {item.itemCode ? <td>{item.itemCode}</td> : <td>--</td>}
                {item.categoryId ? <td>{item.categoryId}</td> : <td>--</td>}
                <td>{item.landingCost}</td>
                {item.taxIncAmount ? <td>{item.taxIncAmount}</td> : <td>--</td>}
                <td>{item.stock}</td>
                <td>
                  <div className="Action-Div">
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
