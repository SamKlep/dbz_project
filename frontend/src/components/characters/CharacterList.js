import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CharacterList extends Component {
  render() {
    const characters = this.props.characters
    return characters.map((character) => (
      <div className='p-3' key={character.id}>
        <Link
          className='text-decoration-none'
          to={`/characters/${character.id}`}>
          <ListGroup as='ul'>
            <ListGroupItem className='ch-item' as='li'>
              <h3 className='text-center'>
                {character.id} - {character.name}
              </h3>
            </ListGroupItem>
          </ListGroup>
        </Link>
      </div>
    ))
  }
}

export default CharacterList
