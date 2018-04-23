import React from 'react'

export const Headline1 = ({ children }) => {
  return (
    <div className="row">
      <div className="col">
        <h1
          className="text-center"
          css={{ paddingTop: '.5em', paddingBottom: '.5em' }}
        >
          {children}
        </h1>
      </div>
    </div>
  )
}

export default Headline1
