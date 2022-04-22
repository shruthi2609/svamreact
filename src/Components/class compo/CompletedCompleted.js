const CompletedComponent=(props)=>{
    return(
        <>
        <h1>Completed Tasks</h1>
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
    export default CompletedComponent