function Item({ name,  importance }) {
  return (
    <li className="item">
      {name} {importance > 0 && `(Importance: ${importance})`}
    </li>
  );
}

  export default function PackingList(){
  return(
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          name="Space Suit"
          importance={9}
        />
      <Item
          name="Helmet with a golden leaf"
        />
      <Item
          name="Photo of Tam"
          importance={6}
        />
      </ul>
    </section>
  );
}





