function DashBoard(props){
    //props.username="somerandom"
    console.log(props.username)
    const {useremail,username,profile}=props
    return(
        <>
        <h1>Username : {username} </h1>
        <a href={profile}>Likedin profile</a>
        <h2>Role: role</h2>
        <h3>Email:</h3>
        </>
    )
}
export default DashBoard