const constants = {
    api_domain: 'https://api.torob.com/v4',
    product_details: '/base-product/details/?prk=',
    similar_products: '/base-product/similar-base-product/',
    search_products: '/base-product/search/'
}

const apis = {
    product_details: constants.api_domain + constants.product_details,
    similar_products: constants.api_domain + constants.similar_products,
    search_products: constants.api_domain + constants.search_products
}

const paginations = {
    similar_products: { size: 20 },
    category_products: { size: 20 }
}

export { constants, apis, paginations }
