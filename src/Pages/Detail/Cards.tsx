function Cards() {
  return (
    <div className="card">
      <img
        src={"https://m.media-amazon.com/images/I/61Hgr+ecuiL._AC_UY1100_.jpg"}
        alt="Product Image"
        className="product-image"
        width={"100%"}
        height={"70%"}
      />
      <h3 className="title">Apple IPhone</h3>
      <h3 className="price">$ 229</h3>
      <h3 className="category">Category: Phones</h3>
      <p className="desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere est
        necessitatibus modi iste. Possimus tempora minus facilis omni
      </p>
      <div className="buttons">
        <button className="add">Add to Cart</button>
        <button className="cancle">Cancle</button>
      </div>
    </div>
  );
}

export default Cards;
