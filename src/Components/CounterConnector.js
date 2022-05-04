import { connect } from "react-redux";
import CounterComp from "./CounterComp";
import { increment,decrement } from "../actions";
const mapStateToProps=(count)=>{
    return{
        count:count
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterComp)
