

const getImage = async() => {
    const apiKey = 'RCfMabVei8KqPypSxvYx1Uq3t2ioHj9q';
    const endpoint = 'https://api.giphy.com/v1/gifs/random?api_key';

    try {
        const resp =  await fetch(`${endpoint}=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch(error) {
        console.log(error)
    }

}

getImage();