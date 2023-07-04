import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSearchMovieQuery } from '../features/movieApi';



const Search = () => {
  const { search } = useParams();



  const { data, isLoading, isError, error } = useSearchMovieQuery(search);

  const nav = useNavigate();

  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_lit5uqwc.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  if (data?.results?.length < 1) {
    return <h1 className='text-red-600 text-2xl w-[50%] mx-auto mt-11'>Not found try searching again using another query</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-5 p-6'>
      {data.results.map((movie) => {
        return <div onClick={() => nav(`/movie/detail/${movie.id}`)} key={movie.id} className='cursor-pointer hover:scale-105 transition-all delay-75 shadow-lg'>
          <img className='h-[400px] w-full' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt="" />

          <div className='p-3 space-y-2'>
            <h1 className='text-xl font-bold'>{movie.title}</h1>
            <p>{movie.overview.substring(0, 150) + '...'}</p>
          </div>

        </div>
      })}

    </div>
  )
}

export default Search