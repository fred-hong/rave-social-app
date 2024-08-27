import {Account, Client, ID} from 'react-native-appwrite'

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.ravify',
    projectId: '66beb38500201969c7e5',
    databaseId: '66beb4fd0035cb28cbf7',
    userCollectionId: '66beb51300233d093bfb',
    videoCollectionId: '66beb548003affdb0756',
    storageId: '66beb6720006e1e55c34'
}

// Init your react-native SDK
const client = new Client();

client
    .setEndPoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)

    const account = new Account(client)
// Register User
export const createUser = () => {
    Account.create(ID.unique(), '', '', '')
        .then(function (response){
            console.log(response)
        }, function (error) {
            console.log(error)
        })
}