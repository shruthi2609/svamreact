const CompletedComponent=(props)=>{
    const bgstyle={backgroundColor:"violet"}
    return(
        <div style={bgstyle}>
        <h1 >Completed Tasks</h1>
        {
        props.prop1.map((item)=>(
            <>
            <h3>{item.title}</h3>
            <button>delete</button>
            </>
        ))
    }
        </div>
    )
    }
    export default CompletedComponent