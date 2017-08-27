const generatePrice = prop => ({
    type: 'GENERATE_PRICE',
    customer: prop.customers,
    price: prop.price
})

const generateLuckyone = () => ({
    type: 'LUCKYONE'
})

const generateFourpaythree = () => ({
    type: 'FOURPAYTHREE'
})

const generateLuckytwo = () => ({
    type: 'LUCKYTWO'
})

const generateOversixthousand = () => ({
    type: 'OVERSIXTHOUSAND'
})

const generateDefaultValue = () => ({
    type: 'DEFAULTVALUE'
})

export const priceChange = prop => (dispatch) => {
    dispatch(generatePrice(prop))
}

export const promotionLuckyone = () => (dispatch) => {
    dispatch(generateLuckyone())
}

export const promotionFourpaythree = () => (dispatch) => {
    dispatch(generateFourpaythree())
}

export const promotionLuckytwo = () => (dispatch) => {
    dispatch(generateLuckytwo())
}

export const promotionOversixthousand = () => (dispatch) => {
    dispatch(generateOversixthousand())
}

export const setDefaultValue = () => (dispatch) => {
    dispatch(generateDefaultValue())
}