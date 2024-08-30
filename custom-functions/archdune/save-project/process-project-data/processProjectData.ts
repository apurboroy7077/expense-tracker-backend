import turnToObject from "./turn-into-object/turnToObject";

const processProjectData = (
  projectImageLink: any,
  additionalFieldsImagesLink: any,
  fields: any
) => {
  const fieldKeys = Object.keys(fields);
  const additionalFieldImagesLinkKeys = Object.keys(additionalFieldsImagesLink);

  fields.projectImageLink = projectImageLink;
  for (let i = 0; i < additionalFieldImagesLinkKeys.length; i++) {
    const key = additionalFieldImagesLinkKeys[i];
    const imageLink = additionalFieldsImagesLink[key];
    fields[key] = imageLink;
  }
  const data = turnToObject(fields);

  return data;
};

export default processProjectData;
