import "./featuredInfo.css";
import w1 from "../../assets/images/cash-on-delivery.png";
import w2 from "../../assets/images/delivery-location.png";
import { useHistory } from "react-router-dom";

export default function FeaturedInfo() {
  const history = useHistory();
  function handleClickInventory() {
    history.push("/inventoryList");
  }

  return (
    <div>
      <div className="featured">
        <div className="featuredItem" onClick={handleClickInventory}>
          <div className="featuredMoneyContainer">
            <img
              src="https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg"
              alt="Products"
              width={300}
              style={{borderRadius:20}}
            />
          </div>
          <span className="featuredTitle">Product</span>
        </div>
      </div>
    </div>
  );
}
