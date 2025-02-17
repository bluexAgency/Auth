import Menu from "../../models/Menu.js";

const updateMenu =async(id,menuData)=>{
    try {
        const update = await Menu.findByPk(id)
        if(!update)throw new Error('Menu no encontrado')
            return update.update(menuData)
    } catch (error) {
        console.log(error)
    }
}

export default updateMenu