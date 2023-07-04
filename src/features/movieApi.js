import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmNjOTgxMGVlMzc2ZmQ4MTBmZTYxNTg5NThlMGMxOCIsInN1YiI6IjY0OWE0NzdiYTZkZGNiMDEzYWQ4ZDU0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HO3Qo0-4I8o3t5cAHtAzOisIVhUNvTLc8C65e6s8qDQ';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({

    nowPlaying: builder.query({
      query: () => ({
        url: '/movie/now_playing',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })
    }),


    movieByCategory: builder.query({
      query: (category) => ({
        url: `/movie/${category}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })
    }),

    movieById: builder.query({
      query: (id) => ({
        url: `/movie/${id}/videos`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })
    }),

    searchMovie: builder.query({
      query: (query) => ({
        url: `/search/movie`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },
        params: {
          query: query
          // alt only write query as it has same key and value
        }
      })
    }),

    movieByPage: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },
        params: {

          page: query.page

        }
      })
    }),

    movieDetails: builder.query({
      query: (query) => ({
        url: `https://api.themoviedb.org/3/movie/${query}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },

      })
    }),




  })
});

export const { useNowPlayingQuery, useMovieByCategoryQuery, useMovieByIdQuery, useSearchMovieQuery, useMovieByPageQuery, useMovieDetailsQuery } = movieApi