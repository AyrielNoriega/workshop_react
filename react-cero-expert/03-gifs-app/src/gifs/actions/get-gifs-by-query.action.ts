import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api";

export const getGifsByQueryAction = async(query: string): Promise<Gif[]> => {
  const response = await giphyApi<GiphyResponse>('/search', {
    params: {
        q: query,
        limit: 10,
    }
  });
//   fetch('https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=YOUR_QUERY&limit=25&offset=0&rating=g&lang=en');
    return response.data.data.map<Gif>(({ id, title, images }) => ({
        id,
        title,
        url: images.downsized_medium.url,
        width: Number(images.downsized_medium.width),
        height: Number(images.downsized_medium.height),
    }));
}
