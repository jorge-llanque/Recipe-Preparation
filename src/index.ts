import createApp from "./api";

const app = createApp()

app.listen(3000, () => {
    console.log("App connected on port 3000")
})