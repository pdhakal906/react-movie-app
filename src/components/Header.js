import { Button, Input } from '@material-tailwind/react';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const Header = () => {

  const nav = useNavigate();

  const [show, setShow] = useState(false);

  const valSchema = Yup.object().shape({
    query: Yup.string().required("Type something to search")
  });

  const formik = useFormik({
    initialValues: {
      query: ''
    },

    onSubmit: (val, { resetForm }) => {
      nav(`/searchmovie/${val.query}`);
      resetForm();

    },

    validationSchema: valSchema

  })




  return (
    <header className='bg-black text-white flex justify-between px-4 py-2 items-baseline pt-5'>
      <div>
        <NavLink to="/"><h1 className='text-2xl mb-2 mr-5'>Movies</h1></NavLink>



        {show && <nav className='hidden sm:flex flex-col space-y-2'>
          <NavLink to="/meal">Meals</NavLink>
          <NavLink to="/movie/popular">Popular</NavLink>
          <NavLink to="/movie/top_rated">Top Rated</NavLink>
          <NavLink to="/movie/upcoming">Upcomming</NavLink>
        </nav>
        }


      </div>
      <nav className='hidden space-x-5 sm:flex  items-center'>
        {formik.errors.query && formik.touched.query && <h1 className='text-red-500'>{formik.errors.query}</h1>}
        <form onSubmit={formik.handleSubmit}>
          <div className='grid grid-cols-2 gap-3'>
            <input
              className='w-[120px] bg-black border border-white p-1'
              type='search'
              color='white'
              name='query'
              onChange={formik.handleChange}
              value={formik.values.query}


            />

            <Button type='submit' className='w-[80px]'>Search</Button>


          </div>
        </form>

      </nav>


      <button onClick={() => setShow(!show)}>
        {show ?

          <i className="fa-solid fa-xmark hidden sm:flex"></i> :
          <i className="fa-solid fa-bars hidden sm:flex" ></i>

        }</button>


      <nav className='sm:hidden space-x-5 flex  items-center'>
        <NavLink to="/meal">Meals</NavLink>
        <NavLink to="/movie/popular">Popular</NavLink>
        <NavLink to="/movie/top_rated">Top Rated</NavLink>
        <NavLink to="/movie/upcoming">Upcomming</NavLink>
        {formik.errors.query && formik.touched.query && <h1 className='text-red-500'>{formik.errors.query}</h1>}
        <form onSubmit={formik.handleSubmit}>
          <div className='flex gap-2'>
            <Input

              type='search'
              color='white'
              label='Type a movie to search'
              name='query'
              onChange={formik.handleChange}
              value={formik.values.query}


            />

            <Button type='submit'>Search</Button>


          </div>
        </form>

      </nav>



    </header >
  )
}

export default Header
