/**
 * Internal Dependencies.
 */
import Header from "../../src/Components/Layouts/Header/header";
import Footer from "../../src/Components/Layouts/Footer/footer";
import Products from "../../src/products/index";
import {
  GET_PRODUCTS_ENDPOINT,
  HEADER_FOOTER_ENDPOINT,
} from "../../src/Utils/Constants/endpoints";

/**
 * External Dependencies.
 */
import axios from "axios";
// import { getProductsData } from "../src/utils/products";

export default function Shop({ headerFooter, products }) {
  const { header, footer } = headerFooter || {};
  return (
    <div>
      <Header header={header} />
      <main className="container mx-auto py-4">
        <Products products={products} />
      </main>

      <Footer footer={footer} />
    </div>
  );
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: productsData } = await axios.get(GET_PRODUCTS_ENDPOINT);

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      products: productsData?.products ?? {},
    },

    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}
