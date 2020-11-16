import * as Appwrite from 'appwrite'

const appwrite = new Appwrite()
appwrite
  .setEndpoint('https://appwrite.ionicisere.co.uk/v1') // Replace this with your endpoint
  .setProject('5fb2936958033') // Replace this with your projectID

  let promise = appwrite.account.createSession('amadeus1@ionicisere.co.uk', 'TESTTEST100');

  promise.then(function (response) {
      console.log(`Successfully logged in as: ${response.name}`); // Success
  }, function (error) {
      console.error(error); // Failure
  });

export { appwrite }
