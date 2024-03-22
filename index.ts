
import fs from 'fs';
import { FleekSdk, PersonalAccessTokenService } from '@fleekxyz/sdk';
import dotenv from 'dotenv';
dotenv.config();

const pat = process.env.PAT || '';
const project_id = process.env.PROJECT_ID || '';

const patService = new PersonalAccessTokenService({
    personalAccessToken: pat, 
    projectId: project_id,
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
      console.log( 'IPFS URL:', `https://cf-ipfs.io/${result.cid}`)
  }).catch(error => {
      console.error('Error uploading file to IPFS:', error);
  }).finally(() => {
    process.exit(); 
});
