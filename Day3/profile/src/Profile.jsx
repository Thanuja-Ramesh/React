import Image from "./assets/image/image.jpg"

const ProfileCard = ()=>{
    return (<>

    <div style={{width : "400px", padding : "30px",height : "450px",

        borderRadius : "10px",boxShadow :"1px 2px 1px 2px",

        margin : "15px auto" 

    }}>

        <h2 style={{padding : "10px",
            textAlign:"center",}}>My Profile</h2>
    
    <div style={{textAlign : "center"}}>
        <img src={Image} alt="" width = "150px"  />

        <p><strong>Name :</strong> Thanuja Ramesh</p>
        <p><strong>Role :</strong>Java Developer</p>
        <button style={{backgroundColor : "grey" , padding : "10px",
            borderRadius :"10px"}}>Submit</button>

    </div>
    
    </div>
    
    </>)
}
export default ProfileCard