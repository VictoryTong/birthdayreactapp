import { useState } from "react";

export const Home = () => {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} setItems={setItems} />
    </div>
  );
};

function Logo() {
  return (
    <div>
      <h1>🎂Happy Birthday🎉👨</h1>
      <h1>Parth</h1>
    </div>
  );
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    setDescription("");
    setQuantity(1);
    onAddItems(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div>
        <h3>Please add your birthday message along with your name</h3>
      </div>
      <br />
      <div class="messagebox">
        <input
          type="text"
          placeholder="Message..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </div>
    </form>
  );
}
function PackingList({ items, setItems }) {
  function handleDeleteItem(itemId) {
    const index = items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const newarray = [...items.slice(0, index), ...items.slice(index + 1)];
      setItems(newarray);
    }
  }

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={handleDeleteItem} />
        ))}
      </ul>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>👜You have X items on your list and you already packed X (X%)</em>
    </footer>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span
        style={{
          textDecoration: item.packed ? "line-through" : "none",
          whiteSpace: "normal",
          textAlign: "left",
          display: "inline-block",
          wordBreak: "break-word",
        }}
      >
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
