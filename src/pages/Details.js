import React from 'react'
import { useMovieByIdQuery, useMovieDetailsQuery } from '../features/movieApi';
import { useParams } from 'react-router';

const Details = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useMovieByIdQuery(id); const { data: dat, isLoading: load, isError: isE, error: err } = useMovieDetailsQuery(id);

  console.log(data);
  if (isLoading || load) {
    return <div className='h-[200px] w-[200px] mx-auto mt-24'>
      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_b88nh30c.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (
    <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${dat.poster_path}')` }} className='h-[89.3vh] bg-no-repeat bg-cover '>
      <div className='py-5 space-y-5 max-w-6xl mx-auto'>
        <div className='bg-white'>
          <h1 className='text-center text-3xl font-extrabold'>{dat.title}</h1>
        </div>

        <iframe width="560" height="315" className='mx-auto mt-11' src={`https://www.youtube.com/embed/${data.results[0]?.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className='shadow-2xl bg-white p-2'>
          <p className='font-extrabold'>{dat?.overview}</p>
        </div>

      </div>

    </div>

  )
}

export default Details
