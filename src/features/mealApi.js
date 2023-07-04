import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1' }),
  endpoints: (builder) => ({
    mealsCategory: builder.query({
      query: () => ({
        url: '/categories.php',
        method: 'GET'
      })
    }),

    mealsCategoryDetails: builder.query({
      query: (category) => ({
        url: '/filter.php',
        method: 'GET',
        params: {
          c: category
        }
      })
    }),

    mealDetails: builder.query({
      query: (id) => ({
        url: '/lookup.php',
        method: 'GET',
        params: {
          i: id
        }
      })
    }),

  })

})

export const { useMealsCategoryQuery, useMealsCategoryDetailsQuery, useMealDetailsQuery } = mealApi