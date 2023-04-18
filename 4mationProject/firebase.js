import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, query, orderBy, limit, doc, getDoc, collection, where, getDocs } from "firebase/firestore";
// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBJ4NdrP0w9Pw8jc1i8jSxn4DDFfFzCZvY",
    authDomain: "mation-fcbb8.firebaseapp.com",
    projectId: "mation-fcbb8",
    storageBucket: "mation-fcbb8.appspot.com",
    messagingSenderId: "908210303130",
    appId: "1:908210303130:web:ba3f2fa32dea5f7edaaf23",
    measurementId: "G-DE06Z800RF"
  };

app = initializeApp(firebaseConfig);

// AUTHENTICATION
export const auth = getAuth(app);
export function getCurrentUser() {
  // use this function when you need information about the current signed in user
  // null is returned when no user is signed in -> anonymous use of the app
  return auth.currentUser;
}

// DATABASE
const db = getFirestore(app);
export async function getBoardListData(sortby, descending) {
  const q = query(collection(db, "boards"), descending ? orderBy(sortby, "desc") : orderBy(sortby), limit(50));
  const querySnapshot = await getDocs(q);
  const data = [];
  console.log(querySnapshot.size);
  for (let i = 0; i < querySnapshot.size; i++) {
    const doc = querySnapshot.docs[i];
    const docData = doc.data();
    const ownerDoc = await getDoc(docData.owner);
    const ownerDocData = ownerDoc.data();
    data.push({id: i, type: 0, boardId: doc.id, boardName: docData.name, boardOwnerName: ownerDocData.name});
  }
  return data;
}

export async function getBoardInfoData(boardId) {
  // this function will be used in BoardScreen
  // TODO: get data from a single board document from firestore
  
  return {}
} 

export async function getPostListData(boardId, sortby, descending) {
  //input types: string, string, boolean
  // this function will be used in BoardScreen
  //TODO: get a list of data to be used in PostListItem components. see PostListData in TestData. similar to getBoardListData

  return []
}

export async function getPostData(postId) {
  // used in PostScreen
  // post content, basic post info. etc...
  return {}
}

export async function getCommentListData(postId, sortby, descending) {
  // used in PostScreen
  // get comments replying directly to a post
  return []
}

export async function getSubcommentListData(commentId, sortby, descending) {
  // used in SubcommentScreen
  // get the subcomments of a comment
  return []
}

export async function getUserInfo(uid) {
  // used in ProfileScreen
}
export async function getUserBoards(uid, joined) {
  // boolean parameter joined. if false: return only boards owned by the user
  // used in MyBoardsScreen 
}
export async function getUserPosts(uid) {
  // used in MyPostsScreen
}
export async function getUserComments(uid) {
  // used in MyCommentsScreen
}


export async function createBoard(uid, boardName, boardDescription) {

}
// define more backend functions that create documents in the backend 
// more functions



// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
