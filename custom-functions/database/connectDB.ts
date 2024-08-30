import mongoose from "mongoose";
import {
  databaseURL,
  databaseURL_2,
  databaseURL_3,
} from "../../data/others/EnvironmentVariables";
import {
  archduneDatabaseUrl,
  quiztifyAR7DatabaseUrl,
} from "../../data/archdune/variables/ArchduneVariables";

const connectDB = async () => {
  await mongoose
    .connect(quiztifyAR7DatabaseUrl)
    .then((response) => {
      console.log("Database is Connected");
    })
    .catch((error: any) => {
      console.log(error);
      setTimeout(() => {
        // connectDB();
      }, 3000);
    });
};
export { connectDB };
//
