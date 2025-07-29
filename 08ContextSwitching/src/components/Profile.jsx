import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) <div>Please Login</div>

    return <div>Welcome! {user?.username}</div>
  
}

export default Profile
