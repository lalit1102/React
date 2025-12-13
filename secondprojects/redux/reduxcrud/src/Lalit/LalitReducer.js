import {ins,upd,del} from "./LalitAction"

const initialState = {
  data:[]
}
  const LalitReducer = (state=initialState,action) => {
      switch (action.type){
        case ins:return{
            ...state,
            data:[
              ...state.data,
              action.payload
            ]
        }
        case upd:return{
            ...state,
            data:state.data.map((i,index)=>{
             if (index===action.payload.id){
              i = action.payload.data
             }
              return i
            })
        }
        case del: return{
          ...state,
          data:state.data.filter((i,index)=>index !== action.payload)

        }
        default:return state
      }
  }

  export default LalitReducer