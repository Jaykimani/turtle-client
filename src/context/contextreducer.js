
export const Reducer = (state, action) => {

    switch (action.type) {
        case "add-all":
            return {
                ...state,
                all: action.payload
            }
        case "add-fruits":
            return {
                ...state,
                fruits: action.payload
            } 
        case "add-veggies":
            return {
                ...state,
                veggies: action.payload
            } 
        case "add-bases":
            return {
                ...state,
                bases: action.payload
            }
        case "add-addins":
            return {
                ...state,
                addins: action.payload
            }
        case "add-saladItems":
            return {
                ...state,
                saladItems : action.payload
            }             
        case "edit-smoothieOrders":
            return {
                ...state,
                smoothieOrders: [...state.smoothieOrders, action.payload],
                
            };
        case "edit-orderType":
            return {
                ...state,
                orderType: [...state.orderType, action.payload]
            }
        case "open-checkout":
            return {
                ...state,
                openCheckout: true
            };
        case "close-checkout":
            return {
                ...state,
                openCheckout: false
            };
        case "edit-checkout":
            return {
                ...state,
                smoothieOrders: [...action.payload]
            };
          
        case "clear-checkout":
            return {
                ...state,
                smoothieOrders: []
            }
        
        default:
            return state;    
    }
}