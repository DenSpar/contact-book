export default function getRequestModule(url) {
    return fetch(url).then(response => {
        return response.json()
    })
};