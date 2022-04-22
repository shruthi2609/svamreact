const PendingComponent=(props)=>{
    console.log(props)
  const bgstyle={backgroundColor:"aqua"}
return(
    <div style={bgstyle}>
    <h1>Pending Tasks</h1>
    {
        props.prop1.map((item)=>(
            <>
            <h3>{item.title}</h3>
            <button onClick={()=>props.callfunc(item.id)}>
                done</button>
            </>
        ))
    }
    </div>
)
}
export default PendingComponent