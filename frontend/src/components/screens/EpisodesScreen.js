import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

import { EPISODES_URL } from '../../constants/index'
import EpisodesList from '../episodes/EpisodesList'

class EpisodesScreen extends Component {
  state = {
    episodes: [],
  }

  componentDidMount() {
    this.resetState()
  }

  getEpisodes = () => {
    axios.get(EPISODES_URL).then((res) => this.setState({ episodes: res.data }))
  }

  resetState = () => {
    this.getEpisodes()
  }

  render() {
    return (
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col>
            <div className='cards'>
              <EpisodesList
                episodes={this.state.episodes}
                resetState={this.resetState}
              />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default EpisodesScreen
