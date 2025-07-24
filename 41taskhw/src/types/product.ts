import {Review} from './review'

export type Product = {
    id?: number,
    images?: string[],
    title?: string,
    shippingInformation?: string,
    rating?: number,
    price?: number,
    category?: string,
    reviews?: Review[],
    description?: string,
}