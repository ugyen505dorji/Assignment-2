import imageUrl from "../../Assets/spark.png";

function Cards() {
  return (
    <div className="card">
      <img
        src={"https://m.media-amazon.com/images/I/61Hgr+ecuiL._AC_UY1100_.jpg"}
        alt="Product Image"
        className="product-image"
        width={"100%"}
        height={"75%"}
      />
      <h3 className="title">Apple IPhone</h3>
      <h3 className="price">$ 229</h3>
    </div>
  );
}

export default Cards;
