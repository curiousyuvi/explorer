import { Product } from "./Product";

export type SearchResultsContext = {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    under1000filter: boolean;
    is1000to2000filter: boolean;
    is2000to3000filter: boolean;
    above3000filter: boolean;
    setUnder1000Filter: React.Dispatch<React.SetStateAction<boolean>>;
    setIs1000to2000filter: React.Dispatch<React.SetStateAction<boolean>>;
    setIs2000to3000filter: React.Dispatch<React.SetStateAction<boolean>>;
    setAbove3000filter: React.Dispatch<React.SetStateAction<boolean>>;
    is1Star: boolean;
    is2Star: boolean;
    is3Star: boolean;
    is4Star: boolean;
    is5Star: boolean;
    setIs1Star: React.Dispatch<React.SetStateAction<boolean>>;
    setIs2Star: React.Dispatch<React.SetStateAction<boolean>>;
    setIs3Star: React.Dispatch<React.SetStateAction<boolean>>;
    setIs4Star: React.Dispatch<React.SetStateAction<boolean>>;
    setIs5Star: React.Dispatch<React.SetStateAction<boolean>>;
}