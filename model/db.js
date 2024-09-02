const mongoose = require("mongoose");
URL = process.env.URL

const connect = async () => {
    await mongoose.connect(URL)
}
module.exports = connect