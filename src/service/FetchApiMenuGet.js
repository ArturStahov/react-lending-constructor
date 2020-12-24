export default function FetchApiMenu() {

    const serverOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    }
    return fetch('https://lending-constructor-default-rtdb.firebaseio.com/menu-options.json', serverOptions)

}