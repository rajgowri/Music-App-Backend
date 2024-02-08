const mongoose = require("mongoose")

const musicschema = new mongoose.Schema(
    {
        musicName:String,
        musicArtists:String,
        musicReleased:String,
        musicGenres:String,
        musicImage:String
    }
)

module.exports=mongoose.model("music",musicschema)