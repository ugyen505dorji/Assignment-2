import { useNavigate } from "react-router-dom";

function Cards(props: any) {
  let nav = useNavigate();

  function handleClick() {
    nav("/detail", {
      state: {
        product: props.data,
      },
    });
  }
  return (
    <div className="card" onClick={handleClick}>
      <img
        src={props.data.image}
        alt="Product Image"
        className="product-image"
        width={"100%"}
        height={"75%"}
      />
      <h3 className="title">{props.data.title}</h3>
      <h3 className="price">$ {props.data.price}</h3>
    </div>
  );
}

export default Cards;
