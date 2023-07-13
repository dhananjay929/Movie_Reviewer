import React from 'react'

const Alert = ({setShowAlert}) => {
  return (
    <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Not a Mind-Reader</strong>This ia  a movie reviewer app, not a mind-reader which will read your mind to fetch movie name, so please enter the movie name manually. I , beg.
  <button onClick={()=>{
    setShowAlert(false);
  }} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}

export default Alert