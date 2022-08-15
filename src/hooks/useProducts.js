import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = `http://localhost:3001`;

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const data = await axios.get(`${API_URL}/api/products`);
      setProducts(data.data);
    }
    getProducts();
  }, []);

  return {
    products
  }
}