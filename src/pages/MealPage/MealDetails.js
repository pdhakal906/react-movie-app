import React from 'react'
import { useMealDetailsQuery } from '../../features/mealApi'
import { useParams } from 'react-router'

const MealDetails = () => {
  const { id } = useParams();
  console.log(id)
  const { data, isLoading, isError, error } = useMealDetailsQuery(id)
  console.log(data)




  if (isLoading) {
    return <div className='h-[200px] w-[200px] mx-auto mt-24'>
      <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_b88nh30c.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  if (!data) {
    return null;
  }

  const ingredients = [];
  const measures = [];


  for (let i = 1; i <= Object.keys(data.meals[0]).length; i++) {
    let ingridentKey = `strIngredient${i}`;
    let measureKey = `strMeasure${i}`;

    if (data.meals[0][ingridentKey] && data.meals[0][measureKey]) {
      ingredients.push(data.meals[0][ingridentKey]);
      measures.push(data.meals[0][measureKey]);

    } else {
      break;
    }
  }
  console.log(ingredients)



  return (
    <div>
      <div className='sm:grid-cols-1 grid grid-cols-2'>
        <div className='h-[350px] w-[400px] mt-5 p-5'>
          <h1 className='text-[20px] mb-5'>{data.meals[0].strMeal}</h1>
          <img className='h-[250px] mb-1' src={data.meals[0].strMealThumb} alt="" />
          {/* <h1>{tags[0]} {tags[1]}</h1> */}
        </div>

        <div className='grid grid-cols-2 gap-30 mt-24 p-5'>
          <div>
            <h1>Ingridents:</h1>

            {ingredients.map((ingredient, index) => {
              return <p key={index}>{ingredient}</p>;
            })}
          </div>
          <div>
            <h1>Measure</h1>

            {measures.map((measure, index) => {
              return <p key={index}>{measure}</p>
            })}
          </div>
        </div>

      </div>

      <div className='p-5 mt-5'>
        <h1 className='text-[20px] mb-2'>Instructions:</h1>
        <p className='text-justify'>{data.meals[0].strInstructions}</p>
      </div>

    </div>
  )

}

export default MealDetails
