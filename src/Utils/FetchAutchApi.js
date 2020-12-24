const API_KEY = "AIzaSyBDRmh7QrltLzol9VYQNVYQAQCA73a7myM"

export default function FetchAuthApi(email, password) {
    const options = {
        method: 'POST',
        body: JSON.stringify({ email, password, returnSecureToken: true }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    }
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, options)
}