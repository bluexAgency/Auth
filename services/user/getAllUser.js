import User from "../../models/User.js";

const getAllUser = async()=>{
    try {
        return await User.findAll();
    } catch (error) {
        console.log(error)
    }

}


export default getAllUser
