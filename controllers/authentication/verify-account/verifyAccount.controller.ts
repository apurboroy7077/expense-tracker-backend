import express from "express";
import verifyAccount from "../../../custom-functions-2/1/verify-and-create-data-in-original-database/verifyAccount";

const verifyAccountController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = request.body;
    const { verificationCode } = receivedData;
    await verifyAccount(verificationCode);
    response.status(200).send({ _: "" });
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------

    response.status(500).send({ message: error });
  }
};

export { verifyAccountController };
