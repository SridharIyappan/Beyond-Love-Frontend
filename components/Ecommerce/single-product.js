import Client from "shopify-buy";
const SingleProduct = () => {
  const client = Client.buildClient({
    domain: "brono-3450.myshopify.com/",
    storefrontAccessToken: process.env.API_STORE_FRONT_KEY,
  });

  const productId = "gid://shopify/Product/7048398930057";

  client.product.fetch(productId).then((product) => {
    // Do something with the product
    console.log(product);
  });

  // Create an empty checkout
  client.checkout.create().then((checkout) => {
    // Do something with the checkout
    console.log({ checkout });
  });

  return <div>Ashok Pant</div>;
};

export default SingleProduct;
