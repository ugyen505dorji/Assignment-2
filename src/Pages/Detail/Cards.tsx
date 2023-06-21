function Cards(props: any) {
  return (
    <div className="card" onClick={() => {}}>
      <img
        src={props.data.image}
        alt="Product"
        className="product-image"
        width={"100%"}
        height={"70%"}
      />
      <h3 className="title">{props.data.title}</h3>
      <h3 className="price">$ {props.data.price}</h3>
      <h3 className="category">Category: {props.data.category}</h3>
      <p className="desc">{props.data.description}</p>
      <div className="buttons">
        <button className="add">Add to Cart</button>
        <button className="cancle">Cancle</button>
      </div>
    </div>
  );
}

export default Cards;
