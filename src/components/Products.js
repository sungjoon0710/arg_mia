import React from 'react';
import '../App.css';

const Products = () => {
  const products = [
    {
      title: "THE CONVERGENCE",
      image: "https://images.unsplash.com/photo-1544365562-8960c054cfbb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A quantum computing interface that bridges the gap between human consciousness and machine intelligence. Experience the future of computation."
    },
    {
      title: "NEURAL BRIDGE",
      image: "https://images.unsplash.com/photo-1737719435022-7329822e7bd6?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Advanced neural interface technology that enhances cognitive capabilities and enables direct brain-computer communication."
    },
    {
      title: "DIGITAL ETHER",
      image: "https://images.unsplash.com/photo-1649877508777-1554357604eb?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A revolutionary data visualization system that transforms complex information into intuitive, interactive experiences."
    }
  ];

  return (
    <div className="products-container">
      <div className="products-content">
        <h2>OUR INNOVATIONS</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-overlay">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products; 