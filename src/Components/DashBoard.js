function DashBoard(props){
    //props.username="somerandom"
    console.log(props.username)
    const {useremail,username}=props
    return(
        <>
        <h1>Username : {username} </h1>
        <h2>Role: role</h2>
        <h3>Email:</h3>
        </>
    )
}
export default DashBoard