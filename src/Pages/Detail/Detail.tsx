import { useLocation } from "react-router-dom";
import Cards from "./Cards";
import "./Styles/Detail.css";

function Detail() {
  let loc = useLocation();
  let data = loc.state.product;
  return (
    <div className="product-detail">
      <Cards data={data} />
    </div>
  );
}

export default Detail;
