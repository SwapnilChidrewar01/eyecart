const mongoose = require("mongoose");
URL = "mongodb+srv://chidrewarswapnil01:Swapnil2001@cluster0.jbwfjmt.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0"

const connect = async () => {
    await mongoose.connect(URL)
}
module.exports = connect