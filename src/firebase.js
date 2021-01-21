import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyASJ91A_M9IGUAyvV86nEn6lc1vd_eFpRA',
	authDomain: 'whattowatchnextnow.firebaseapp.com',
	databaseURL: 'https://whattowatchnextnow.firebaseio.com',
	projectId: 'whattowatchnextnow',
	storageBucket: 'whattowatchnextnow.appspot.com',
	messagingSenderId: '4448655619',
	appId: '1:4448655619:web:a34d57f8148446d35df136',
	measurementId: 'G-0SG5Y3CXBN',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
