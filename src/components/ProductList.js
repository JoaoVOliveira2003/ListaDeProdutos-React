import React, { useState } from "react";
import { useFetch } from './hooks/useFetch';

export const ProductList = () => {
  const [url, setUrl] = useState("http://localhost:8000/products");
  const { data: products, loading } = useFetch(url);
  console.log(products);

  return (
    <section>
      <div className="opcoes">
        <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>
          Mostrar Disponível
        </button>
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          Mostrar tudo
        </button>
        <button onClick={() => setUrl("http://localhost:8000/products?in_stock=false")}>
          Mostrar Indisponível
        </button>
      </div>
      
      {loading && <p>Carregando dados ... </p>}

      {products && products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id"><b>ID - </b>{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>R$ {product.price}</span>
            <span className={product.in_stock ? "Disponivel" : "Indisponivel"}>
              {product.in_stock ? "Disponível" : "Indisponível"}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};
