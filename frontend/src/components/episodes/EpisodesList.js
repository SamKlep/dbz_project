import React, { Component } from 'react'
import { Image, Card } from 'react-bootstrap'

class EpisodesList extends Component {
  render() {
    const episodes = this.props.episodes
    return episodes.map((episodes) => (
      <Card className='p-3' key={episodes.id}>
        <Image fluid src={episodes.image} />
        <Card.Title>
          <h3>{episodes.title}</h3>
        </Card.Title>
      </Card>
    ))
  }
}

export default EpisodesList
