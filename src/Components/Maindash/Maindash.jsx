import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import './Maindash.css'

function Maindash() {
  return (
    <div className='maindash'>
        <h1>Dashboard</h1>
        <Cards />
        
        <Table />

    </div>
  )
}

export default Maindash