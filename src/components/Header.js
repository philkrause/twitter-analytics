import React from 'react'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Header() {

  return (
    <>

      <section className='header'>
        <FontAwesomeIcon icon={faTwitterSquare} size='3x' />
        <h1 style={{ fontSize: '2rem', paddingRight: '2rem', marginRight: '20rem' }}>Twitter Analytics</h1>
        <p>Home</p>
        <p>Graphs</p>
        <p>Search By Location</p>
        <p>About</p>
      </section>
    </>


  )


}