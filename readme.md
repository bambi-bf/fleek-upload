
# Fleek x IPFS Nodejs App

This Node.js application allows you to easily pine files to IPFS using the Fleek SDK.

## Prerequisites

Before you begin, make sure you have the following installed:

- NodeJs 18+ 
- npm (Node Package Manager)
- fleek CLI (https://docs.fleek.xyz/docs/CLI)

## Getting Started

Follow these steps to get started with the Fleek Node.js App:

1. Clone this repository:

   ```bash
   git clone
   ```

2. Navigate to the project directory:

   ```bash
   cd fleek-ipfs
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Obtain a Personal Access Token (PAT) from Fleek. Replace `<your-pat>` in the code with your actual PAT.

## Usage

Once the application is running, follow these steps to upload a file to IPFS:

1. Ensure that the file you want to upload is in the project directory.

2. Update the filename in the code to match the file you want to upload:

   ```javascript
   const fileContent = fs.readFileSync('<filename>');
   uploadFileToIPFS('<filename>', fileContent)
     .then(result => {
       console.log('File uploaded to IPFS:', result);
     })
     .catch(error => {
       console.error('Error uploading file to IPFS:', error);
     });
   ```

3. Execute the application:

   ```bash
   npx tsx index.ts
   ```

4. Upon successful execution, you will see a message indicating that the file has been uploaded to IPFS along with the resulting hash.

