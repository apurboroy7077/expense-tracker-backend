import saveImageAndGiveLink from "../save-image-and-give-link/saveImageAndGiveLink";

const saveAndGiveProjectImageLink = async (files: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const fileKeys = Object.keys(files);
      for (let i = 0; i < fileKeys.length; i++) {
        const key = fileKeys[i];
        if (key === "projectImage") {
          const projectImageFile = files[key][0];
          const imageLink = await saveImageAndGiveLink(projectImageFile);
          resolve(imageLink);
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};

export default saveAndGiveProjectImageLink;
