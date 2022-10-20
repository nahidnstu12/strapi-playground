const { statSync } = require('fs') 
const uploadFile = async (strapi, {
    data,
    file,
  }) => {
    const { refId, ref, field } = data
    const { name, path, type } = file
  
    const fileStat = statSync(path);
  
    const [uploadedFile] = await strapi.plugins.upload.services.upload.upload({
      data: {
        refId,
        ref,
        field
      },
      files: {
        path,
        name,
        type,
        size: fileStat.size,
      },
    });
  
    return uploadedFile
  }

  module.exports = { uploadFile };