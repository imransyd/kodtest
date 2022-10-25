import axios from 'axios';
import {tvProgram, tvShowProps} from '../types';

const TvShowService = {
  listTvShows: async (query: string): Promise<Array<tvProgram>> => {
    const URI = encodeURI(`http://api.tvmaze.com/search/shows?q=${query}`);
    const response = await axios(URI);
    return Promise.resolve(response.data as Array<tvProgram>);
  },

  getTvShowInfo: async (id: number): Promise<tvShowProps> => {
    const URI = `https://api.tvmaze.com/shows/${id}?embed=cast`;
    const response = await axios(URI);
    return Promise.resolve(response.data);
  },
  // getTvShowInfo: async (id: number): Promise<tvShowProps> => {
  //   const URI = `http://api.tvmaze.com/search/shows?q=${id}`;
  //   await axios.get(URI).then(res => {
  //     return Promise.resolve(res.data as Array<tvShowProps>)
  //   });
  // },
};

export default TvShowService;
