
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=GEc8PKlr63Kr9i8EBjWKgmTBJ6x2lnYU`;

    const res = await fetch(url);
    const {data} = await res.json();
    
    const gifs = data.map((element) => {
        return {
            id: element.id,
            title: element.title,
            gif: element.images?.downsized_medium?.url,
        };
    });

    return gifs;
}