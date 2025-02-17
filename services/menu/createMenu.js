import Menu from "../../models/Menu.js";

const createMenu =async(menuData)=>{
    try {
        return await Menu.create(menuData)
    } catch (error) {
        console.log(error)
    }
}

export default createMenu