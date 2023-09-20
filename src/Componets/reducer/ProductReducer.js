const initialState = {
     data : [],
     cart : [],
     sports :[],
     bussness : [],
     movies : [],
     technologie : []
}

export default (state = initialState, { type, payload }) => {
  console.log(payload,"ooooo")
  switch (type){

  case 'GET_DATA':
    return { ...state, data : payload}

    case 'ADD_ITEM' :

       let add = [...state.cart];

       if(add.length == 0){
        add.push({item:payload, count : 1});
        }else{
          let index = add.findIndex((v)=>{

            return v.item.id == payload.id;
          });

          if(index>=0){
            add = add.map((v)=>{
              console.log(v , "kkkkkk");
    
              if(v.item.id == payload.id)
              {
                return { item: payload, count : v.count+1}
                
              }
              else
              {
                return v;
              }
    
            })
          }
    
          else
          {
    
            add.push({item:payload, count : 1});
    
          }
        }

        return   {...state, cart: add}

        case 'INC_ITEM' : 

        let plusItem = state.cart.map((product)=>{
                      console.log(product,"oooo")

                      if(product.item.id == payload){
                        console.log(payload,"uuuu")
                        return {...product , count : product.count+1 }
                      }
                      return product;

        })

        return {...state , cart : plusItem}

        case 'DEC_ITEM' :

        let decrease  = state.cart.map((product)=>{
                     if(product.item.id == payload){
                         
                      return {...product , count : product.count-1} 


                     }

                     return product
        })

        return {...state , cart : decrease};

        case 'REMOVE_ITEM' :

        let removeItem = state.cart.filter((product)=>{

         return product.item.id !== payload;

        })

        return {...state , cart : removeItem}


        case 'SPORTS_DATA' :

        return { ...state, sports : payload }


        case 'BUSSNES_DATA' :

        return { ...state, bussness : payload}

        case 'MOVIE_DATA' :

        return {...state , movies : payload}

        case 'TECHNOLOGY_DATA' :

        return{...state , technologie : payload}










  default:
    return state
  }
}
