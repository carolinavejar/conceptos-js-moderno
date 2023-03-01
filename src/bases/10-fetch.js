const apikey = `yoBdwcXQMuQ2QLV02Rg9uQcnv1a3WKGT`;

const httpC = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

httpC
.then(response => response.json())
.then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img)
})
.catch((err) => {
    console.warn(err)
})