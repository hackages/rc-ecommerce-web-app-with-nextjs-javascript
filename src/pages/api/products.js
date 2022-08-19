import { getAllProducts } from "../../../server/products";

const handler = (req, res) => {
  const fakeProducts = getAllProducts()
  res.status(200).json(fakeProducts);
};

export default handler;
