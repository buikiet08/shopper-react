const TOKEN_KEY = 'token'
const USER_KEY = 'user'
const CART_KEY = 'cart'

const createStoreNamespace = (name) => {
    return {
        set: (data) => {
            localStorage.setItem(name, JSON.stringify(data))
        },
        get: () => {
            return JSON.parse(localStorage.getItem(name))
        },
        clear: () => {
            localStorage.removeItem(name)
        }
    }
}
export const setToken = (data) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}
export const getToken = () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY))
}
export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}


export const setUser = (data) => {
    localStorage.setItem(USER_KEY, JSON.stringify(data))
}
export const getUser = () => {
    return JSON.parse(localStorage.getItem(USER_KEY)) 
}
export const clearUser = () => {
    localStorage.removeItem(USER_KEY)
}

// export const setCart = (data) => {
//     localStorage.setItem(CART_KEY, JSON.stringify(data))
// }
// export const getCart = () => {
//     return JSON.parse(localStorage.getItem(CART_KEY)) 
// }
// export const clearCart = () => {
//     localStorage.removeItem(CART_KEY)
// }

// check data sp dc check trong giỏ hàng
export const storePreCheckoutResponse = createStoreNamespace('prev-checkout-response')
// 
export const storePreCheckoutData = createStoreNamespace('prev-checkout-data')

export const storeAddressSelect = createStoreNamespace('prev-checkout-address')
export const storeCart = createStoreNamespace('cart')
