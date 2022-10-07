import Client from "shopify-buy";
const Products = () => {
  // Initializing a client to return content in the store's primary language
  const client = Client.buildClient({
    domain: "brono-3450.myshopify.com/",
    storefrontAccessToken: process.env.API_STORE_FRONT_KEY,
  });

  client.product.fetchAll().then((products) => {
    // Do something with the products
    console.log(products);
  });

  // Initializing a client to return translated content
  // const clientWithTranslatedContent = Client.buildClient({
  //   domain: 'your-shop-name.myshopify.com',
  //   storefrontAccessToken: 'your-storefront-access-token',
  // //   language: 'ja-JP'
  // });
  return <div>hello world!</div>;
};

export default Products;
