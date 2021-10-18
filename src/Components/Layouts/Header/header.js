import Head from "next/head";
import Link from "next/link";
import { isEmpty } from "lodash";
import SvgUser from "../../icons/svgs/User";
import SvgWishlist from "../../icons/svgs/Wishlist";
import SvgBag from "../../icons/svgs/Bag";
import SvgBurgerIcon from "../../icons/svgs/BurgerIcon";
import { useState } from "react";

const Header = ({ header }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon } =
    header;

  return (
    <>
      <Head>
        <title>{siteTitle || "Flora by Meens"}</title>
        <meta name={siteDescription} />
        <link rel="icon" href={favicon} />
      </Head>
      <div className="header">
        <nav className="bg-white p-4">
          <div className="flex items-center justify-between flex-wrap container mx-auto">
            <div className="flex items-center flex-shrink-0 text-black mr-20">
              <Link href="/">
                <a>
                  <img
                    className="mr-2 w-11"
                    src={siteLogoUrl}
                    alt={`${siteTitle} logo`}
                  />
                </a>
              </Link>
              <span>
                <Link href="/">
                  <a className="font-semibold text-xl tracking-tight siteTitle text-red-300">
                    {siteTitle || "Flora by Meens"}
                  </a>
                </Link>
              </span>
            </div>
            <div className="block lg:hidden">
              <button
                onClick={() => setIsMenuVisible(!isMenuVisible)}
                className="flex items-center px-3 py-2 border rounded text-red-300 border-red-300 hover:text-red-200 hover:border-red-200"
              >
                <SvgBurgerIcon className="fill-current h-3 w-3 " />
              </button>
            </div>
            <div
              className={`${
                isMenuVisible ? "max-h-full" : "h-0"
              } overflow-hidden  w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto justify-between`}
            >
              <div className="text-sm font-medium uppercase ">
                {!isEmpty(headerMenuItems) && headerMenuItems.length
                  ? headerMenuItems.map((menuItem) => (
                      <Link key={menuItem?.ID} href={menuItem.url || "/"}>
                        <a
                          className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                          dangerouslySetInnerHTML={{ __html: menuItem.title }}
                        />
                      </Link>
                    ))
                  : null}
              </div>
              <div className="text-sm font-medium  ">
                <a
                  href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <SvgUser className="mr-1 lg:mr-0" />
                    Profile
                  </span>
                </a>
                <a
                  href="#responsive-header"
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <SvgWishlist className="mr-1 lg:mr-0" />
                    Wishlist
                  </span>
                </a>
                <a
                  className="flex mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                  href="/cart/"
                >
                  <span className="flex flex-row items-center lg:flex-col">
                    <SvgBag className="mr-1 lg:mr-0" />
                    Bag
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
