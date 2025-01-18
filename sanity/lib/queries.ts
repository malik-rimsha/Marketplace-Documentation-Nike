import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[type == "productSchema"]{
    _id,
    name,
    description,
    price,
    category,
    inventory,
    status,
    discountPercentage,
    pricewithoutDiscount,
    rating,
    ratingCount,
    tags,
    size,
    "imageUrl" : image.asset->url
}`)


export const fourpro = defineQuery(`
    *[type == "productSchema"][0..3]{
    _id,
    name,
    description,
    price,
    category,
    inventory,
    status,
    discountPercentage,
    pricewithoutDiscount,
    rating,
    ratingCount,
    tags,
    size,
    "imageUrl" : image.asset->url
}`)

