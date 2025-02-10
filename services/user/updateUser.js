import User from "../../models/User.js";

const update = async(id,userData)=>{

    try {
        const user = await User.findByPk(id)
        if(!user)throw new Error('Usuario no encontrado')
        return await user.update(userData) 
    } catch (error) {
        console.log(error)
    }
   
}

export default update