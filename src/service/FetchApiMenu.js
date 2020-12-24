
export default function FetchApiMenu(objOptions) {

    const serverOptions = {
        method: 'PUT',
        body: JSON.stringify(objOptions),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    }
    return fetch('https://lending-constructor-default-rtdb.firebaseio.com/menu-options.json', serverOptions)

}