import express from "express"

const app = express()

app.use("/", (req, res) => {
	res.send("hey ! it's myapp")
})

app.listen(4000, () => {
	console.log("I am running on port 4000 !")
})