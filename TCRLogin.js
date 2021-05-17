const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function (snapshort, prevChildkey) {
    var newPost = snapshot.val();
});

function send(){ // used to fetch the values entered by the user and push them into databse
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    detailsRef.push().set({
        email: email,
        username: username,
        password: password,
    })
}
