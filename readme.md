
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
   git clone https://github.com/fleekxyz/pin-files-to-ipfs-with-fleekSDK.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pin-files-to-ipfs-with-fleekSDK
   ```

3. Enviroment Variables
    duplicate and rename ```.example.env``` to ```.env```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Duplicate ```.example.env```, and rename to ```.env```

6. Obtain a Personal Access Token (PAT) from Fleek. 
    Run ```fleek pat create``` on your terminal, copy your PAT, and insert into your ```.env``` file.

7. Create and Obtain your ProjectID
    Run ```fleek projects create``` this will create a new project for you on fleek. Then run ```fleek projects list``` this will list out all your projects and their corresponding project ID in your terminal. Copy your project ID. It should look like this: ```clrje1234567abcdedf```, and insert into your env file. 



## Usage

Once the application is running, follow these steps to upload a file to IPFS:

1. Ensure that the file you want to upload is in the project directory.

2. Update the ```filename``` in the code to match the file you want to upload:

   ```javascript
   const fileContent = fs.readFileSync('<filename>');
   uploadFileToIPFS('<filename>', fileContent)
     .then(result => {
       console.log('File uploaded to IPFS:', result);
     })
     .catch(error => {
       console.error('Error uploading file to IPFS:', error);
     }).finally(()=> {
            process.exit(); 
     });
   ```

3. Execute the application:

   ```bash
   npx tsx index.ts
   ```

4. Upon successful execution, you will see a message indicating that the file has been uploaded to IPFS along with the resulting data.

