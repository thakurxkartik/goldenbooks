
import data from './data';
function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">
                      Golden Books
                      </a>
                </div>
                <div>
                    <a class="cart-sign" href="cart.html">Cart</a>
                    <a class="cart-sign" href="signin.html">Sign In</a>
                </div>
            </header>

            <main>
                <div className="row center">
                  {
                    data.products.map(product =>(
                      <div key={product._id} className="card">
                        <a href={`/product/${product._id}`}>
                            <img className="medium" src={product.image} alt="product" />
                        </a>
                        <div className="card-body">
                            <a href="product.html" className="product-name">
                                <h2>{product.name}</h2>
                            </a>
                            <div className="rating">
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                            </div>
                            <div className="price">
                                ₹ {product.price}
                            </div>

                        </div>
                    </div>
                    ))
                  }
                    
                </div>
            </main>

            <footer>
                All rights reserved for Golden Books
            </footer>
        </div>
  );
}

export default App;
