import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useMovieByCategoryQuery } from '../features/movieApi';

const Category = () => {

  const { category } = useParams();
  const { data, isLoading, isError, error } = useMovieByCategoryQuery(category);
  const nav = useNavigate();
  let displayCategory = "";


  switch (category) {
    case 'popular':
      displayCategory = "Popular";
      break;
    case 'top_rated':
      displayCategory = "Top Rated";
      break;
    case 'upcoming':
      displayCategory = "Upcomming";
      break;

  }


  if (isLoading) {
    return <div className='h-[200px] w-[200px] mx-auto mt-24'>
      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_b88nh30c.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }


  return (
    <>

      < div >
        <h1 className='text-[30px] font-bold'>{displayCategory}</h1>

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
      </div >

      <div className='flex justify-center'>
        <div className='flex space-x-5 mt-10 shadow-2xl'>
          {/* only show next button if there are more than 1 page */}
          {data?.page > 1 && <button>Prev</button>}
          <h1>1</h1>
          <button onClick={() => nav(`/searchpage/${category}/${data?.page + 1}`)}>Next</button>
        </div>

      </div>


    </>

  )
}

export default Category
