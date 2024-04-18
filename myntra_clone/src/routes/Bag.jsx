import BagItem from "../components/Bag/BagItem";
import BagSummary from "../components/Bag/BagSummary";
import { useSelector } from "react-redux";

export default function Bag() {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const bagItems = items.filter((item) => bag.indexOf(item.id) >= 0);

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItems.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
}
