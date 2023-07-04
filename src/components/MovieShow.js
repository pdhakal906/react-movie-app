import React from 'react'
import { useNavigate } from 'react-router'

  ;
const MovieShow = ({ data, isLoading, isError, error }) => {
  const nav = useNavigate()
  if (isLoading) {
    return <div className='h-[200px] w-[200px] mx-auto mt-24'>
      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_b88nh30c.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (

    <div>
      <h1 className='text-[30px] font-bold'>Now playing</h1>
      <div className='grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2'>
        {data?.results?.map((movie) => {
          return <div key={movie.id} className='cursor-pointer hover:scale-105 transition-all delay-75 shadow-lg' onClick={() => nav(`/movie/detail/${movie.id}`)}>
            <img className='h-[450px] w-full' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="" />
            <div className='p-3 space-y-2'>
              <h1 className='text-xl font-bold'>{movie.title}</h1>
              <p>{movie.overview.substring(0, 100) + '.....'}</p>
            </div>
          </div>
        })}
      </div>
    </div>

  )
}

export default MovieShow
