firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // User is not authenticated, redirect to login page
        window.location.href = "loginForm.html";
    }
});