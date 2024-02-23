import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <div className='text-6xl'>
      <UserSearch/>
      <UserResults />
    </div>
  )
}

export default Home
