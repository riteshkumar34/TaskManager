import mongoose from "mongoose";


const noteSchema=new mongoose.Schema({
    title:{
        type:String,
        requires:true
    },
    content:{
        type:String,
        requires:true,
    },
},
{timestamps:true}
);

const Note=mongoose.model("Note",noteSchema)

export default Note