const AWS = require('aws-sdk');
const moment = require('moment');

const region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET_NAME;

const S3 = new AWS.S3({ region });

// ----------------------------------------
// General

const response = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body),
});

// ----------------------------------------
// Common


// ----------------------------------------
// main

exports.handler = async (event) => {
  console.log(JSON.stringify(event));
  const body = JSON.parse(event.body);
  // console.log(body);

  try {
    const execDatetime = moment().format('YYYY-MM-DD HH:mm:ss.SSS');

    await S3.upload({
      Bucket,
      Key: body.fileName || `${execDatetime}.jpg`,
      Body: Buffer.from(body.encodedFileContent, 'base64'),
      // ACL: 'public-read',
    }).promise();
  } catch (e) {
    console.log(e);
    return response('500', 'Internal Server Error');
  }

  return response('200', 'Success');
};
