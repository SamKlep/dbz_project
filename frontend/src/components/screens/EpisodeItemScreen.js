import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ListGroup, Card } from 'react-bootstrap'
import { EPISODE_ITEM_URL } from '../../constants'

const EpisodeItemScreen = ({ match }) => {
  const [item, setItem] = useState({})

  useEffect(() => {
    const fetchItem = async () => {
      const { data } = await axios.get(`${EPISODE_ITEM_URL}${match.params.id}`)

      console.log(data)
      setItem(data)
    }

    fetchItem()
    // eslint-disable-next-line
  }, [match])

  return (
    <>
      <div className='container mb-5'>
        <Link className='btn btn-primary my-5 mx-auto' to='/episodes'>
          Go Back
        </Link>

        <div className='container m-auto mb-5'>
          <Card className='mx-auto mb-5 border-none' style={{ width: '36rem' }}>
            <Card.Img
              variant='top'
              src={'http://127.0.0.1:8000' + item.image}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>

              <ListGroup variant='flush'>
                <ListGroup.Item className='bg-light'>
                  <strong>Episode: {item.number} </strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Saga: </strong>
                  {item.saga}
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>
                  <strong> Japan Air Date: </strong>
                  {item.japan_air_date}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong> US Air Date: </strong>
                  {item.usa_air_date}
                </ListGroup.Item>
              </ListGroup>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default EpisodeItemScreen
