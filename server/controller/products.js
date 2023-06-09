import products from '../model/products.json' assert { type: 'json' };


export const getProducts = (req, res) => {
  res.json(products);
  res.end();
};
