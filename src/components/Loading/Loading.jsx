import React from 'react'
import Loader from 'react-loader-spinner'
import './Loading.css'

const Loading = () => {
  return (
    <div className='loading'>
        <Loader type="Circles" color="#00BFFF" height={100} width={100} />
    </div>
  )
}

export default Loading