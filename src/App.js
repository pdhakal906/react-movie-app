
import { Route, Routes } from "react-router"
import RootLayout from "./components/RootLayout"
import HomePage from "./pages/HomePage"
import Category from "./pages/Category"
import Details from "./pages/Details"
import Search from "./pages/Search"
import PageMovie from "./pages/PageMovie"
import MealPage from "./pages/MealPage/MealPage"
import CategoryDetails from "./pages/MealPage/CategoryDetails"
import MealDetails from "./pages/MealPage/MealDetails"

const App = () => {



  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/movie/:category" element={<Category />} />
          <Route path="/movie/detail/:id" element={<Details />} />
          <Route path="/searchmovie/:search" element={<Search />} />
          <Route path="/searchpage/:category/:page" element={<PageMovie />} />
          <Route path="/meal" element={<MealPage />} />
          <Route path="/mealscategorydetails/:category" element={<CategoryDetails />} />
          <Route path="/mealdetails/:id" element={<MealDetails />} />



        </Route>


      </Routes>
    </>
  )
}

export default App
