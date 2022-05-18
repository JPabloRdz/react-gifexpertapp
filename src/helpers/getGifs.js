

 export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)  }&limit=10&api_key=r6DqB0Tzs4Fyg7Byk5B59q9HhOyEmuD9`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map( img => {
      return{
        id: img.id,
        tittle: img.tittle,
        url: img.images?.original.url
      }
    });

    return gifs;
  }