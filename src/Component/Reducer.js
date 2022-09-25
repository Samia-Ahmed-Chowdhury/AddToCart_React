export const reducer = (state, action) => {
    if (action.type === "Remove_Item") {
        return {
            ...state,
            totalItem:state.totalItem-1,
            
            item: state.item.filter((curElem) => {
                if(curElem.id !== action.payload){
                    return {curElem};
                }
                else{
                // console.log(state.totalAmount-curElem.price)
                state.totalAmount=state.totalAmount-curElem.price
                }
            }),
            totalAmount:state.totalAmount,

        }
    }

    if (action.type === "Clear_All") {
        return {
            ...state,
            totalItem:0,
            totalAmount:0,
            item: []
        }
    }

    if (action.type === "Increment_Item") {
      let updatedCart=state.item.map((curElem) => {
            if (curElem.id === action.payload) {
                if(curElem.quantity<5){
                    state.totalItem= state.totalItem+1;
                    state.totalAmount=curElem.price+state.totalAmount
                    state.itemAmount=curElem.price*(curElem.quantity+1) 
                    // console.log(state.totalAmount)
             return { ...curElem, quantity: curElem.quantity + 1,itemAmount:curElem.price*(curElem.quantity+1) }
                }
                
                alert('max 5 allowed ')
                // console.log(state.totalItem)
  }
            return curElem;
        });
        return{...state,item:updatedCart,totalItem:state.totalItem,totalAmount:state.totalAmount,itemAmount:state.itemAmount}
    }

    if (action.type === "Decrement_Item") {
        let updatedCart=state.item.map((curElem) => {
              if (curElem.id === action.payload) {
                if(curElem.quantity>1){
                    state.totalItem= state.totalItem-1;
                    // console.log(state.totalAmount)
                    // console.log(curElem.itemAmount/curElem.quantity)
                    state.totalAmount=state.totalAmount-(curElem.itemAmount/curElem.quantity)
                    console.log(state.totalAmount)
                  return { ...curElem, quantity: curElem.quantity - 1 ,itemAmount:curElem.itemAmount-curElem.price }
                }
                alert('cant perform negtive ')
  
              }
              return curElem;
          });
          return{...state,item:updatedCart,totalItem:state.totalItem,totalAmount:state.totalAmount}
      }


    return state
}