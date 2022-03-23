// Read environment variables
import { config } from "dotenv";
config();

const configurations = {
  PORT: process.env.PORT || 4000,
  MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  MONGODB_DATABASE: process.env.MONGODB_DB || "maps",
  /*
  MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost"}/${
    process.env.MONGODB_DATABASE || "maps"
  }`,
  */
  MONGODB_URI:'mongodb+srv://mrsoftware:linux123@cluster0.frnme.mongodb.net/maps?retryWrites=true&w=majority'

};

export default configurations;
