const getImage = async () => {
    try {
        const apikey = `yoBdwcXQMuQ2QLV02Rg9uQcnv1a3WKGT`;
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const { data } = await response.json()

        return data.images.original.url;
    } catch (error) {
        //  manejar error
    }
    
}

getImage().then ((url) => {
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img)
})