const config = require('./config');
const PORT =config.port

const app = require("./app")

app.listen(PORT, () => {
    console.log("Open your server on port ", PORT);
})