const res = document.getElementById("res")

let jsonData;
fetch("https://dog.ceo/api/breeds/list/all").then(response => response.json())
    .then(data => {
        jsonData = data
        res.innerHTML = Object.keys(data.message).map((m) => `<p>${m}</p>`).join('')
    })

function api({ target: { value } }) {
    const { message } = jsonData
    res.innerHTML = '<p>' + Object.keys(message).filter(k => k.startsWith(value)).join('</p><p>') + '</p>'
}


