import productImage from "../img/banana.png"; 
import productImage2 from "../img/Lemon.png"; 
import productImage3 from "../img/Orange.png"; 
import productImage4 from "../img/Malta.png"; 
import productImage5 from "../img/Pinapple.png"; 
import productImage6 from "../img/Pomegranate.png"; 


const images = [productImage, productImage2, productImage3,  productImage4, productImage5, productImage6];

const productName = [
  {
    name: "Banana",
    price: 1.99,
    description: "A ripe banana",
  },
  {
    name: "Lemon",
    price: 0.99,
    description: "A fresh apple",
  },
  {
    name: "Orange",
    price: 1.49,
    description: "A juicy orange",
  },
  {
    name: "Malta",
    price: 0.79,
    description: "A sour lemon",
  },
  {
    name: "Pinapple",
    price: 1.29,
    description: "A sweet malta",
  },
  {
    name: "Pomegrante",
    price: 1.99,
    description: "A ripe pomegrante",
  }
];

function Product() {
  return (
    <div className="main-container">
      {productName.map((product, index) => (
        <div key={index} className="container"> 
          <img src={images[index]} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Product;