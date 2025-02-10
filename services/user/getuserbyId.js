import User from "../../models/User.js";


const getUserById = async(id)=>{
    try {
        return await User.findByPk(id)
    } catch (error) {
        console.log(error)
    }

}

export default getUserById