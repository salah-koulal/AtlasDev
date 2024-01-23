import React from 'react'
import Home from '../pages/Home'
import Categories from '../pages/Categories'
import Courses from '../pages/Courses/Courses'
import CoursesDetails from '../pages/Courses/CoursesDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'


import {Routes, Route} from 'react-router-dom'

const Routers = () => {
    return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Courses/:id' element={<CoursesDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/categories' element={<Categories />} />
    </Routes>
    );
};

export default Routers

