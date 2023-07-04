import React from 'react'
import { useNowPlayingQuery } from '../features/movieApi'

import MovieShow from '../components/MovieShow';


const HomePage = () => {
  const { data, isLoading, isError, error } = useNowPlayingQuery();


  return (
    <>
      <MovieShow data={data} isLoading={isLoading} isError={isError} error={error} />
    </>

  )
}
export default HomePage
