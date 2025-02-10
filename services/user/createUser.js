import User from "../../models/User.js";

const create = async(userData)=>{
    try {
        return await User.create(userData)  
    } catch (error) {
        console.log(error)
    }
   
}

export default create