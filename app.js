import dbSchema from "./config/db.js";
import express from "express";
import "./models/Auditoria.js"
import "./models/Menu.js"
import "./models/MenuPermiso.js"
import "./models/Permissions.js"
import "./models/Roles.js"
import "./models/Rolespermissions.js"
import "./models/User.js"
import "./models/UserRoles.js"

// rutas  //
import userRouter from "./routes/userRoutes.js";


const app = express()

app.use(express.json())
app.use('/api/users',userRouter)

export default app


dbSchema.sync({force:false}).then(()=>{
    console.log("Base de datos sincronizada....zzzzrrr...estoy dentro")
})



// verificar la conexion de BD 
/* console.log("CONECTADO")

const conect = async ()=>{
    await dbSchema.sync({
        force: false
    })
}



conect() */
