import React from 'react'

export const SingleCol = ({ children }) => {
  return (
    <div className="row">
      <div className="col">{children}</div>
    </div>
  )
}

export const Col = ({ children }) => {
  //console.log('col render')
  //console.log(children)
  return <div className="row justify-content-center">{children}</div>
}

export default SingleCol
