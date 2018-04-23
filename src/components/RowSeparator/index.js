import React from 'react'

const RowSeparator = ({ children, elementsPerRow, RowRenderer }) => {
  let rows = [...Array(Math.ceil(children.length / elementsPerRow))]
  rows.fill(1)
  let elementRows = rows.map((val, idx) => {
    //console.log(children.slice(idx*elementsPerRow, idx*elementsPerRow+elementsPerRow))
    return children.slice(
      idx * elementsPerRow,
      idx * elementsPerRow + elementsPerRow
    )
  })
  //console.log(elementsPerRow)
  //console.log(elementRows)
  //console.log(children)
  //console.log(<RowRenderer>1</RowRenderer>)
  return elementRows.map((elements, idx) => (
    <RowRenderer key={`${idx}`}>{elements}</RowRenderer>
  ))
}

export default RowSeparator
