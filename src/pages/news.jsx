import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { SingleCol, Container } from '../components/Typography'

const News = () => {
  return (
    <Container>
      <SingleCol>
        <div css={{ paddingTop: '3em' }}>
          <Timeline
            dataSource={{
              sourceType: 'widget',
              widgetId: '988196444850057217',
            }}
            options={{
              height: '600',
              width: '100%',
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
        </div>
      </SingleCol>
    </Container>
  )
}

export default News
