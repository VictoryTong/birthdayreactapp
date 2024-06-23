import "./style.css";

export const Messages = () => {
  return (
    <div className="app">
      <Stats />
    </div>
  );
};

function Stats({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
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
    </li>
  );
}
