    

    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     console.log('The following user is signed in', user)
    } else {
        console.log('no one is signed in')
    }
  })


function createUser () {
    const userEmail = document.getElementById('exampleInputEmail1').value
    const userPassword = document.getElementById('exampleInputPassword1').value
    // console.log('entered create user' + user.email)
   
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

      //TODO: go to different page where user can sign out
    //   goToDashBoard()

    
}//createUser

//TODO: SIGN USER OUT AND WRITE USER NAME TO DASHBOARD.HTML

function signInUser () {
    const userEmail = document.getElementById('exampleInputEmail1').value
    const userPassword = document.getElementById('exampleInputPassword1').value
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert('The following error occured...' + errorMessage)
        // ...
      });
      //TODO: go to different page where user can sign out
    //   goToDashBoard()
} //sign in user

function goToDashBoard() {
    window.location.href = 'dashboard.html'
}