"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const GiveProductDetailsFromAr7id = (ar7id_) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // const productDetails = (await productsDataModelMongoDbMongoose.findOne({
            //   ar7id: ar7id_,
            // })) as productDataType;
            // const { ar7idOfTheSeller } = productDetails;
            // const sellerDetails = await userDataModelMongoDbMongoose.findOne({
            //   ar7id: ar7idOfTheSeller,
            // });
            // const sellerDetails_ =
            //   sellerDetails?.toObject() as userDataForClientSideType;
            // delete sellerDetails_.password;
            // const totalLikes = await likesDataModelMongoDbMongoose.countDocuments({
            //   ar7idOfSubjectThatReceivedLike: ar7id_,
            // });
            // const totalComments =
            //   await commentsDataModelMongoDbMongoose.countDocuments({
            //     ar7idOfSubjectWhoReceivedComment: ar7id_,
            //   });
            // const totalFollowersOfTheSeller =
            //   await followersDataModelMongoDbMongoose.countDocuments({
            //     ar7idOfTheSubjectWhichIsGettingFollowed: ar7idOfTheSeller,
            //   });
            // const productDetailsForClient: productDetailsForSendingToClientType = {
            //   productData: productDetails,
            //   sellerData: sellerDetails_,
            //   totalLikes: totalLikes,
            //   totalComments: totalComments,
            //   totalFollowersOfTheSeller: totalFollowersOfTheSeller,
            // };
            // resolve(productDetailsForClient);
            // resolve("");
        }
        catch (error) {
            reject(error);
        }
    }));
};
exports.default = GiveProductDetailsFromAr7id;
