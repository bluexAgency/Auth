import Menu from "../../models/Menu.js";

const getAllMenu = async()=>{
    try {
        return await Menu.findAll()
    } catch (error) {
        console.log(error)
    }
}

export default getAllMenu