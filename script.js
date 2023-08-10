const accessKey = "Xk2y-CF69GGtTC1znWq51S5luajET2flI7O2bpBWye4"

const searchForm = document.querySelector(".search-form")
const searcInput = document.getElementById("search-input")
const showResults = document.querySelector(".results")
const showMoreBtn = document.querySelector(".showMore")

let keyword = ""
let page = 1

async function searchImage() {
    keyword = searcInput.value

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url)
    const data = await response.json()

    if (page === 1) {
        showResults.innerHTML = ""
    }

    const results = data.results

    results.map((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small
        const imgLink = document.createElement("a")
        imgLink.href = result.links.html
        imgLink.target = "_blank"

        imgLink.appendChild(image)
        showResults.appendChild(imgLink)
    })

    showMoreBtn.style.display = "block"
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1
    searchImage()
})

showMoreBtn.addEventListener("click", () => {
    page++
    searchImage()
})