const mongoose = require ('mongoose')

const connectDB = (url) => {
   return  mongoose.connect(url,{
        //useNewurlParser: true,
        //useCreateIndex : true,
        //useFindAndModify : false,
        //useUnifiedTopology : true
    })}


module.exports = connectDB