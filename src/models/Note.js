import { Schema, model } from "mongoose";

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    comments:{
      type:String,
      required:false
    },
    user: {
      type: String,
      required: true,
    },
    priority:{
      type:String,
      required:false
    },
    status:{
      type:String,
      required:false
    },
    pages:{
      type:String,
      required:false
    },
    email:{
      type:String,
      required:false
    }
  },
  {
    timestamps: true,
  }
);

export default model("Note", NoteSchema);
