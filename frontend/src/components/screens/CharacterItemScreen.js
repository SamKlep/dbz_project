import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ListGroup, Card } from 'react-bootstrap'
import { CHARACTER_ITEM_URL } from '../../constants'

const CharacterItemScreen = ({ match }) => {
  const [item, setItem] = useState({})

  useEffect(() => {
    const fetchItem = async () => {
      const { data } = await axios.get(
        `${CHARACTER_ITEM_URL}${match.params.id}`
      )

      console.log(data)
      setItem(data)
    }

    fetchItem()
    // eslint-disable-next-line
  }, [match])

  return (
    <>
      <div className='container mb-5'>
        <Link className='btn btn-info my-5 mx-auto' to='/characters'>
          Go Back
        </Link>

        <div className='container m-auto mb-5'>
          <Card className='mx-auto mb-5' style={{ width: '36rem' }}>
            <Card.Img variant='top' src={'http://127.0.0.1:8000' +item.image_main} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>

              <ListGroup variant='flush'>
                <ListGroup.Item className='bg-light'>
                  <strong> Age: </strong>
                  {item.age}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Height: </strong>
                  {item.height}
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>
                  <strong> Weight: </strong>
                  {item.weight}
                </ListGroup.Item>
              </ListGroup>
              <Card.Text>{item.description}{item.background}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default CharacterItemScreen
