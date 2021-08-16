const apiKey = 'RCfMabVei8KqPypSxvYx1Uq3t2ioHj9q';
const endpoint = 'https://api.giphy.com/v1/gifs/random?api_key';

const petition =  fetch(`${endpoint}=${apiKey}`);

petition
.then(resp => resp.json())
.then(({ data }) => {
   const { url } = data.images.original;

   const img =document.createElement('img');
   img.src = url;

   document.body.append(img);
})
.catch(console.warn);