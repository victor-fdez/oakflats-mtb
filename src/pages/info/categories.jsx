import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { categories, timezone, url } from '../../data/categories.json'
import { SingleCol, Container } from '../../components/Typography'
import moment from 'moment-timezone'

const TableHeader = ({ headers }) => {
  const headings = headers
  const title = 'Oakflats Race Categories'
  const description =
    'Oakflats Bike Race in Albuquerque, New Mexico : The Categories for the Bike Race. These categories conform to the USA cycling required categories.'
  const tags = ['Oakflats', 'Bike', 'Race', 'ABQ', 'Albuquerque', 'New Mexico']
  return (
    <React.Fragment>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: tags.join(', ') },
        ]}
      />
      <thead>
        <tr>
          {headings.map((header, idx) => (
            <th className="text-center" scope="col" key={idx}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
    </React.Fragment>
  )
}

const Row = ({ headers, category }) => {
  const name = category[headers['Category'][0]]
  const longName = category[headers['Category'][1]]
  const subcategories = category['subcategories'] || []
  const distance = category[headers['Distance']]
  const laps = category[headers['Laps']]
  const beginTime = moment(category[headers['Start Time']])
    .tz(timezone)
    .format('h:mm A z')
  let time
  if (beginTime) {
    time = beginTime
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
              <div>
                <a href={url}>${fee}</a>
              </div>
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

export default Categories
