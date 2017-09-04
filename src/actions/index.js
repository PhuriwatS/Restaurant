const generateReserveTable = prop => ({
    type: 'RESERVE_TABLE',
    prop
})

const generateCancelReserveTable = prop => ({
    type: 'CANCEL_RESERVE_TABLE',
    prop
})

const generateUpdateReserveTable = prop => ({
    type: 'UPDATE_RESERVE_TABLE',
    prop
})

const generateUpdateIncreaseTable = prop => ({
    type: 'UPDATE_INCREASE_TABLE',
    prop: prop.tableType,
    reserveCount: prop.tableIncreaseNum
})

const generateUpdateDecreaseTable = prop => ({
    type: 'UPDATE_DECREASE_TABLE',
    prop: prop.tableType,
    reserveCount: prop.tableDecreaseNum
})

const generatePromotion = prop => ({
    type: 'GENERATE_PROMOTION',
    prop
})

const generateEditPromotion = prop => ({
    type: 'EDIT_PROMOTION',
    prop
})

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

export const reserveTable = prop => (dispatch) => {
    dispatch(generateReserveTable(prop))
}

export const cancelReserveTable = prop => (dispatch) => {
    dispatch(generateCancelReserveTable(prop))
}

export const updateReserveTable = prop => (dispatch) => {
    dispatch(generateUpdateReserveTable(prop))
}

export const updateIncreaseTable = prop => (dispatch) => {
    dispatch(generateUpdateIncreaseTable(prop))
}

export const updateDecreaseTable = prop => (dispatch) => {
    dispatch(generateUpdateDecreaseTable(prop))
}

export const createPromotion = prop => (dispatch) => {
    dispatch(generatePromotion(prop))
}

export const editPromotion = prop => (dispatch) => {
    dispatch(generateEditPromotion(prop))
}

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