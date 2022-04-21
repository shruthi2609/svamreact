function ComponentTwo(props){
    let a=0
    const upload=()=>{
        a=100
        console.log(a)
    }
    return(
        
        <>
        {console.log("render")}
        <h1>Username : {props.fname}</h1>
        <h2>Login Time: 20-04-2022 10.20 a.m</h2>
        
        <button onClick={upload}>upload marks</button>
        <h3>look at this: {a}</h3>
        </>
    )
    }
    export default ComponentTwo