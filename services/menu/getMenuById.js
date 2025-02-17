import Menu from "../../models/Menu.js";

const getMenuById=async(id)=>{
    try {
        return await Menu.findByPk(id)
    } catch (error) {
        console.log(error)
    }
}

export default getMenuById