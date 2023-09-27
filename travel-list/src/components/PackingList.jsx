import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onUpdateItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems =
    sortBy === "input"
      ? items
      : sortBy === "description"
      ? items.slice().sort((a, b) => a.description.localeCompare(b.description))
      : items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onUpdateItem={onUpdateItem}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={handleSortBy}>
          <option value="input" key="">
            Sort by input order
          </option>
          <option value="description" key="">
            Sort by decription
          </option>
          <option value="packed" key="">
            Sort by packed status
          </option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};
export default PackingList;
