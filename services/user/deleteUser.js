import User from "../../models/User.js";


const deleteuser = async(id)=>{
    try {
        const user = await User.findByPk(id)
        if(!user)throw new Error('Usuario no encontrado')
        return await user.destroy()
    } catch (error) {
        console.log(error)
    }
}

export default deleteuser