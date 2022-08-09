import { fetAllProducts } from "../../../server/fetchAllProducts";

const handler = (req, res) => {
  const products = fetAllProducts()
  res.status(200).json(products);
};

export default handler;
