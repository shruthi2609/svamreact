const PendingComponent=(props)=>{
  
return(
    <>
    <h1>Pending Tasks</h1>
    {
        props.prop1.map((item)=>(
            <>
            <h3>{item.title}</h3>
            </>
        ))
    }
    </>
)
}
export default PendingComponent