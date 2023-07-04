import React from 'react'
import { useMealsCategoryQuery } from '../../features/mealApi'
import { useNavigate } from 'react-router'

const MealPage = () => {
  const { data, isLoading, isError, error } = useMealsCategoryQuery()
  console.log(data)

  const nav = useNavigate();

  if (isLoading) {
    return <div className='h-[200px] w-[200px] mx-auto mt-24'>
      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_b88nh30c.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  return (
    <div className='grid grid-cols-4 gap-5 p-5'>
      {data.categories.map((meals) => {
        return (
          <div onClick={() => nav(`/mealscategorydetails/${meals.strCategory}`)} key={meals.idCategory} className='shadow-2xl p-5 space-y-5'>
            <h1 className='text-2xl'>{meals.strCategory}</h1>
            <img src={meals.strCategoryThumb} alt="" />
            <p>{meals.strCategoryDescription.substring(0, 100) + '...'}</p>
          </div>
        )
      })}
    </div>
  )

}

export default MealPage
