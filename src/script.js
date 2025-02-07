function search() {
    let query = document.getElementById("search-input").value;
    if (query.trim() !== "") {
        let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        document.getElementById("search-frame").src = searchUrl;
    }
}