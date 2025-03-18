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
import roleRouter from "./routes/roleRoutes.js";
import permissionRouter from "./routes/permissionRoutes.js";
import menuRouter from "./routes/menuRoutes.js";
import auditoriaRouter from "./routes/auditoriaRoutes.js";
import userRolRoutes from "./routes/userRolRoutes.js";
import rolPermisoRoutes from "./routes/rolPermisoRoutes.js";

const app = express()

app.use(express.json())
app.use('/api/users',userRouter)
app.use('/api/roles',roleRouter)
app.use('/api/permission',permissionRouter)
app.use('/api/menu',menuRouter)
app.use('/api/auditoria',auditoriaRouter)
app.use('/api/user-roles',userRolRoutes)
app.use("/api/rol-permisos", rolPermisoRoutes)

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
