import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Product } from "../Interfaces/Product";
import { SearchResultsContext } from "../Interfaces/SearchResultsContext";
import { getProducts } from "../Services/fake-store-api";

const searchResultsContext = createContext<SearchResultsContext>(
  {} as SearchResultsContext
);

const SearchResultsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [under1000filter, setUnder1000Filter] = useState<boolean>(false);
  const [is1000to2000filter, setIs1000to2000filter] = useState<boolean>(false);
  const [is2000to3000filter, setIs2000to3000filter] = useState<boolean>(false);
  const [above3000filter, setAbove3000filter] = useState<boolean>(false);
  const [is1Star, setIs1Star] = useState<boolean>(false);
  const [is2Star, setIs2Star] = useState<boolean>(false);
  const [is3Star, setIs3Star] = useState<boolean>(false);
  const [is4Star, setIs4Star] = useState<boolean>(false);
  const [is5Star, setIs5Star] = useState<boolean>(false);

  const priceFilteredProducts = products.filter((product) => {
    if (
      !under1000filter &&
      !is1000to2000filter &&
      !is2000to3000filter &&
      !above3000filter
    )
      return true;
    else {
      if (under1000filter && parseInt(product.price) < 1000) return true;
      if (
        is1000to2000filter &&
        parseInt(product.price) >= 1000 &&
        parseInt(product.price) <= 2000
      )
        return true;
      if (
        is2000to3000filter &&
        parseInt(product.price) >= 2000 &&
        parseInt(product.price) <= 3000
      )
        return true;
      if (above3000filter && parseInt(product.price) > 3000) return true;
      return false;
    }
  });

  const filteredProducts = priceFilteredProducts.filter((product) => {
    if (!is1Star && !is2Star && !is3Star && !is4Star && !is5Star) return true;
    else {
      if (is1Star && product.rating === 1) return true;
      if (is2Star && product.rating === 2) return true;
      if (is3Star && product.rating === 3) return true;
      if (is4Star && product.rating === 4) return true;
      if (is5Star && product.rating === 5) return true;
      return false;
    }
  });

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setProducts(await getProducts());
      setLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <searchResultsContext.Provider
      value={{
        products: filteredProducts,
        setProducts,
        loading,
        setLoading,
        under1000filter,
        is1000to2000filter,
        is2000to3000filter,
        above3000filter,
        setUnder1000Filter,
        setIs1000to2000filter,
        setIs2000to3000filter,
        setAbove3000filter,
        is1Star,
        is2Star,
        is3Star,
        is4Star,
        is5Star,
        setIs1Star,
        setIs2Star,
        setIs3Star,
        setIs4Star,
        setIs5Star,
      }}
    >
      {children}
    </searchResultsContext.Provider>
  );
};

export default SearchResultsProvider;
export { searchResultsContext };
