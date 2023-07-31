import { SELECTED_SONG } from "../action/actionTypes";
import { selectedSong } from "../action/songActions"; 
import { useDispatch } from "react-redux";



let initialState = null ;

const songReducer = (state = initialState ,action)=>{
    switch(action.type){
        case SELECTED_SONG:
            return action.payload ;
        default:
            return state ;
    }
}

export default songReducer ;