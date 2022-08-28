import axios from "axios"
import { Product } from "../Interfaces/Product"

const fake_store_api_endpoint = "https://fakestoreapi.com"

const fs_api_axios_instance = axios.create({ baseURL: fake_store_api_endpoint })


const generateRandomPrice = () => (Math.floor((Math.random() * 4000)) + 200).toString()

const generateRandomRating = () => Math.floor(Math.random() * 5) + 1

const generateRandomRatingCount = () => Math.floor(Math.random() * 300)

const generateLargeAmountOfProducts = (products: Product[]) => {
    return [...products.map((product: Product) => { return { id: product.id, title: product.title, price: generateRandomPrice(), image: product.image, rating: generateRandomRating(), ratingCount: generateRandomRatingCount() } }), ...products.map((product: Product) => { return { id: product.id, title: product.title, price: generateRandomPrice(), image: product.image, rating: generateRandomRating(), ratingCount: generateRandomRatingCount() } }), ...products.map((product: Product) => { return { id: product.id, title: product.title, price: generateRandomPrice(), image: product.image, rating: generateRandomRating(), ratingCount: generateRandomRatingCount() } }), ...products.map((product: Product) => { return { id: product.id, title: product.title, price: generateRandomPrice(), image: product.image, rating: generateRandomRating(), ratingCount: generateRandomRatingCount() } }), ...products.map((product: Product) => { return { id: product.id, title: product.title, price: generateRandomPrice(), image: product.image, rating: generateRandomRating(), ratingCount: generateRandomRatingCount() } }), ...products.map((product: Product) => { return { id: product.id, title: product.title, price: generateRandomPrice(), image: product.image, rating: generateRandomRating(), ratingCount: generateRandomRatingCount() } }), ...products.map((product: Product) => { return { id: product.id, title: product.title, price: generateRandomPrice(), image: product.image, rating: generateRandomRating(), ratingCount: generateRandomRatingCount() } })]
}

const getProducts: (limit?: number) => Promise<Product[]> = async (limit) => {
    try {
        const response = await fs_api_axios_instance({
            method: 'get', url: '/products/category/women\'s clothing', params: { limit }
        })

        if (response.status === 200 && response.data)
            if (limit)
                return response.data.map((product: Product) => { return { id: product.id, title: product.title, price: product.price, image: product.image, rating: generateRandomRating(), ratingCount: generateRandomRatingCount() } })
            else {
                return generateLargeAmountOfProducts(response.data)
            }
        else
            return []
    } catch (err) {
        console.error(err)
        return []
    }
}

export { getProducts }