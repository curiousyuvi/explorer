import axios from "axios"
import { Product } from "../Interfaces/Product"

const fake_store_api_endpoint = "https://fakestoreapi.com"

const fs_api_axios_instance = axios.create({ baseURL: fake_store_api_endpoint })

const getProducts: (limit?: number) => Promise<Product[]> = async (limit) => {
    try {
        const response = await fs_api_axios_instance({
            method: 'get', url: '/products/category/women\'s clothing', params: { limit }
        })

        if (response.status === 200 && response.data)
            return response.data.filter((product: Product) => { return { id: product.id, title: product.title, price: product.price, image: product.image } })
        else
            return []
    } catch (err) {
        console.error(err)
        return []
    }
}

export { getProducts }