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

const generateDefaultValuePromotion = () => ({
    type: 'DEFAULT_VALUE_PROMOTION'
})

const generateDefaultValueGeneral = () => ({
    type: 'DEFAULT_VALUE_GENERAL'
})

const generatePayBillValue = prop => ({
    type: 'PAY_BILL_VALUE',
    customer: prop.customer,
    price: prop.price,
    discount: prop.discount,
    totalPrice: prop.total
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

export const setDefaultValuePromotion = () => (dispatch) => {
    dispatch(generateDefaultValuePromotion())
}

export const setDefaultValueGeneral = () => (dispatch) => {
    dispatch(generateDefaultValueGeneral())
}

export const setPayBillValue = prop => (dispatch) => {
    dispatch(generatePayBillValue(prop))
}