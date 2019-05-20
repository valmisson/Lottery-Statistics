import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID
}

firebase.initializeApp(config)

const database = firebase.database()

export default database
