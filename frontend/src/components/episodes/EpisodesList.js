import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class EpisodesList extends Component {
  render() {
    const episodes = this.props.episodes
    return episodes.map((episode) => (
      <div className='p-3' key={episode.id}>
        <Link className='text-decoration-none' to={`/episodes/${episode.id}`}>
          <ListGroup as='ul'>
            <ListGroupItem className='ch-item' as='li'>
              <h3 className='text-center'>
                {episode.id} - {episode.title}
              </h3>
            </ListGroupItem>
          </ListGroup>
        </Link>
      </div>
    ))
  }
}

export default EpisodesList
