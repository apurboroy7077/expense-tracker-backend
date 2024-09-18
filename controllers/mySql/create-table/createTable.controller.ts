import express from "express";
import saveUserDataToMySqlDatabase from "../../../custom-functions-2/1/save-user-data-to-mysql-database/saveUserDataToMySqlDatabase";

const createTableControllerOfMySql = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = request.body;
    await saveUserDataToMySqlDatabase(receivedData);
    response.json({ test: "test" });
  } catch (error: any) {
    console.log(error);
    response.status(500).send(error.message);
  }
};

export { createTableControllerOfMySql };
