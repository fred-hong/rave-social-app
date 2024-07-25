import express from "express"
import cors from "cors" // a Node.js package that allows cross-origin resource sharing
import users from "./routes/user.js"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors())
app.use(express.json())
app.use("/user", users)

// Start Express Server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})