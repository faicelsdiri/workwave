const express = require("express")
const app = express()
const connectDB = require("./Config/connectDB")

connectDB()

app.use(express.json())

const userRoute = require("./Routes/userRoute")
app.use("/users", userRoute)

app.listen(5000, (err)=>{
    err? console.error(err): console.log("server is running on 5000")
})