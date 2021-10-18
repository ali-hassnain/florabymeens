const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: "https://dev-florabymeens.pantheonsite.io",
  consumerKey: "ck_d5d898f436f985c8b422fba4c6bf78a866362b31",
  consumerSecret: "cs_38f0e5ea54d7704bf48865b9ea5620d539a4daff",
  version: "wc/v3",
});

/**
 * Get Products.
 *
 * Endpoint /api/get-products or '/api/get-products?perPage=2'
 *
 *
 */
export default async function handler(req, res) {
  const responseData = {
    success: false,
    products: [],
  };

  const { perPage } = req?.query ?? {};

  try {
    const { data } = await api.get("products", {
      per_page: perPage || 50,
    });

    responseData.success = true;
    responseData.products = data;

    res.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
}
