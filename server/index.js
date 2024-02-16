const express = require("express")
const app = express()
const connectDB = require("./Config/connectDB")
const path = require('path');
connectDB()

app.use(express.json())

const userRoute = require("./Routes/userRoute")
app.use("/users", userRoute)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const adminRoutes = require("./Routes/adminRoutes")
app.use("/admin", adminRoutes)

 const joboffreRoute = require("./Routes/joboffreRoute")
 app.use("/job",joboffreRoute)

// app.use("/job", JobOffer)

app.listen(5000, (err)=>{
    err? console.error(err): console.log("server is running on 5000")
})