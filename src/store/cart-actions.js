import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCarData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(process.env.REACT_APP_BACKEND_URL);
            if(!response.ok){
                throw new Error('Could not fetch data, try again later')
            }
            const data = await response.json();
            return data;
        }
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Unable to send the data',
                message: 'Ops something went wrong'
            }))
        }
    }
}

// Crear funciones asincronas
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Requested pending',
                message: 'The data is sending...'
            }))
        )

        const sendRequest = async () => {
            const response = await fetch( process.env.REACT_APP_BACKEND_URL, {
                method:'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            })
            if(!response.ok){
                throw new Error('Unable to send the request')
            }
            const responseData = await response.json();

        }

        try {
            await sendRequest();
            dispatch(
                dispatch(uiActions.showNotification({
                    status: 'success',
                    title: 'Requested sended correctly',
                    message: 'The data was sended successfully'
                }))
            )
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Unable to send the data',
                message: 'Ops something went wrong'
            }))
        }
    }
}