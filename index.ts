
import fs from 'fs';
import { FleekSdk, PersonalAccessTokenService } from '@fleekxyz/sdk';


const patService = new PersonalAccessTokenService({
    personalAccessToken: '<your-pat>', // your PAT goes here
    projectId: '<your-project-id>'
})

const fleekSdk = new FleekSdk({ accessTokenService: patService })

async function uploadFileToIPFS(filename: string, content: Buffer) {
    const result = await fleekSdk.ipfs().add({
      path: filename,
      content: content
    });
    return result;
  }

  const fileContent = fs.readFileSync('fleek.jpg');

  uploadFileToIPFS('fleek.jpg', fileContent).then( result => {
      console.log('File uploaded to IPFS:', result);
  }).catch(error => {
      console.error('Error uploading file to IPFS:', error);
  })
