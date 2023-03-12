import React, { useEffect, useState } from "react";
import NameCard from "../components/NameCard";
import { getMagicItems } from "../services/api";

export default function MagicItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMagicItems();
      setItems(data);
    };
    fetchData();
    setLoading(false);
  }, []);

  // console.log("MAGIC ITEMS", items);

  if (loading) return <h1>loading...</h1>;
  return (
    <div className="magic-items">
      <h1>Magic Items</h1>
      {items.map((item, i) => (
        <NameCard key={i} props={item} />
      ))}
    </div>
  );
}
