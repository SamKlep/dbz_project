import React, { Component } from 'react'
import { Image, Card } from 'react-bootstrap'

class CharacterListItem extends Component {
  render() {
    const character = this.props.character
    return character.map((item) => (
      <Card className='p-3' key={item.id}>
        <Image fluid src={item.image} />

        <Card.Title>
          <h3>{item.name}</h3>
        </Card.Title>
      </Card>
    ))
  }
}

export default CharacterListItem
