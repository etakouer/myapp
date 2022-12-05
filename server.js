import express from "express"

const app = express()

app.use("/", (req, res) => {
	res.send("Hey ! it's myapp " + crypto.randomUUID().slice(-8))
})

app.listen(4000, () => {
	console.log("I am running on port 4000 !")
})

setInterval(() => {
  console.log(new Date().toISOString().slice(11,19) + " > I am doing somethings ...");
}, 2000)