export const initialValue = {
    isLoading: false,
    isSuccess: false,
    isFail: false,
    data: []    
}


const reducer = (state = initialValue, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case 'request':
            return {...state, isLoading: true, data: []}
        case 'success':
            return {...state, isLoading: false, isSuccess: true, isFail: false, data: payload}
        case 'fail':
            return {...state, isLoading: false, isSuccess: false, isFail: true, data: []}
    }

    return state;
}

export default reducer;