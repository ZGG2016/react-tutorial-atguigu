
import {INCREMENT,DECREMENT} from '../constant'

const initState = 0
export default function CountReducer(preState=initState, action) {

    const {type,data} = action

    switch (type) {
        case INCREMENT: //如果是加
            return preState + data
        case DECREMENT: //若果是减
            return preState - data
        default:
            return preState
    }
}