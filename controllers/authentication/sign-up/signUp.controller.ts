import express from "express";
import { checkIfEmailAlreadyExistsInUsersData } from "../../../custom-functions-2/1/check-if-email-already-exists/checkIfEmailAlreadyExists";
import { storeDataToUnverifiedUsersDatabase } from "../../../custom-functions-2/1/store-data-to-unverified-users-database/storeDataToUnverifiedUsersDatabase";
import { sendVerificationCodeToUser } from "../../../custom-functions-2/1/send-verification-code-to-user/sendVerificationCodeToUser";

const signUpController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const receivedData = request.body;
    const { userEmail } = receivedData;
    await checkIfEmailAlreadyExistsInUsersData(userEmail);
    const verificationCode = await storeDataToUnverifiedUsersDatabase(
      receivedData
    );

    await sendVerificationCodeToUser(verificationCode, userEmail);

    response.status(200).json({ message: "Signed Up Successful" });
  } catch (error: any) {
    console.log(error);
    // SENDING RESPONSE IF ANYTHING GOES WRONG---------------------------------------------------------------------
    response.status(500).json({ message: error });
  }
};

export { signUpController };
