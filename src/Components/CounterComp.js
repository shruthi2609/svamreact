const CounterComp=(props)=>{
    console.log(props)
const {count,increment,decrement}=props
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default CounterComp