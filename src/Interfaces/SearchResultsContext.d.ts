import { Product } from "./Product";

export type SearchResultsContext = {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}