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
      value={{ products, setProducts, loading, setLoading }}
    >
      {children}
    </searchResultsContext.Provider>
  );
};

export default SearchResultsProvider;
export { searchResultsContext };
