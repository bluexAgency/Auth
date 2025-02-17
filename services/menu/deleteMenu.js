import Menu from "../../models/Menu.js";

const deleteMenu = async(id)=>{
    try {
        const menu = await Menu.findByPk(id);
        if(!menu)throw new Error('permiso no encontrado')
        return await menu.destroy()
    } catch (error) {
        
    }
}

export default deleteMenu