import React from 'react'
import { categories } from '../../data/categories.json'
import { SingleCol, Container } from '../../components/Typography'

const TableHeader = ({ headers }) => {
  const headings = headers
  return (
    <thead>
      <tr>
        {headings.map((header, idx) => (
          <th className="text-center" scope="col" key={idx}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
}

const Row = ({ headers, category }) => {
  const name = category[headers['Category'][0]]
  const longName = category[headers['Category'][1]]
  const subcategories = category['subcategories'] || []
  const distance = category[headers['Distance']]
  const laps = category[headers['Laps']]
  const startTime = new Date(category[headers['Start Time']])
  let time
  if (category[headers['Start Time']]) {
    const meridian = startTime.getHours() >= 12 ? 'PM' : 'AM'
    const minutes =
      `${startTime.getMinutes()}`.length == 1
        ? '0' + startTime.getMinutes()
        : startTime.getMinutes()
    time = `${startTime.getHours()}:${minutes} ${meridian}`
  } else {
    time = ''
  }
  const license = 'USAC'
  const entryFees = Object.entries(category[headers['Entry Fee']])
  return (
    <tr>
      <td className="text-center align-middle">
        {longName}
        <br />
        <strong>{name}</strong>
        {subcategories.map(subcat => <div>{subcat}</div>)}
      </td>
      <td className="text-center align-middle">{time}</td>
      <td className="text-center align-middle">{laps}</td>
      <td className="text-center align-middle">{distance} miles</td>
      <td className="text-center align-middle">{license}</td>
      <td className="text-center align-middle">
        {entryFees.map(([feeName, fee]) => {
          return (
            <div>
              <div>
                <strong>{feeName}</strong>
              </div>
              <div>${fee}</div>
            </div>
          )
        })}
      </td>
    </tr>
  )
}

const Categories = ({}) => {
  const headers = {
    Category: ['name', 'category name'],
    'Start Time': 'start time',
    Laps: 'laps',
    Distance: 'miles',
    License: null,
    'Entry Fee': ['entry fee'],
  }
  const headings = Object.keys(headers)
  return (
    <Container css={{ paddingTop: '40px' }}>
      <SingleCol>
        <div className="table-responsive">
          <table className="table">
            <caption>{'list of categories'}</caption>
            <TableHeader headers={headings} />
            {categories.map(category => (
              <Row headers={headers} category={category} />
            ))}
          </table>
        </div>
      </SingleCol>
    </Container>
  )
}
/*
* **Pro & Cat 1 (Expert) :**  6 laps - 26 miles
  * Starts at 10:30am  
* **Cat 2 (Sport) :** 5 laps - 21.5 miles
  * Starts at 10:30am  
* **Cat 3 (Beginner) :** 4 laps - 17 miles
  * Starts at 8:00am  
* **Youth 6-8yrs :** 3 laps - 1.5 miles (Special Course)
  * Starts at 10:00am  
* **Roadrunners 6yrs and under :** Parent supervision required 
  * Starts at 10:00am  
  * */

export default Categories
