import { writeFile } from "fs";
import path from "path";

const editFile = (data: any) => {
  return new Promise((resolve, reject) => {
    try {
      const filePath = path.join("./data", "data.json");
      const processedData = JSON.stringify(data);
      writeFile(filePath, processedData, "utf8", (error) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve("");
        }
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export default editFile;
