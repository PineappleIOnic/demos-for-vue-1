import * as Appwrite from 'appwrite'

const appwrite = new Appwrite()
appwrite
  .setEndpoint('https://endpoint.example/v1') // Replace with your own endpoint
  .setProject('ProjectID') // Replace with your own ProjectID

export { appwrite }
