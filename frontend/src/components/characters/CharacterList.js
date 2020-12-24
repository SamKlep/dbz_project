import React, { Component } from 'react'
import { Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CharacterList extends Component {
  render() {
    const characters = this.props.characters
    return characters.map((character) => (
      <Card className='p-3' key={character.id}>
        <Link to={`/characters/${character.id}`}>
          <Image fluid src={character.image_main} />

          <Card.Title>
            <h3>{character.name}</h3>
          </Card.Title>
        </Link>
      </Card>
    ))
  }
}

export default CharacterList
