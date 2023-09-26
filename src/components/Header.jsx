import React from 'react'
import Navbar from "../components/Navbar"
import SearchForm from '../components/SearchForm'

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Search books</h2><br />
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header