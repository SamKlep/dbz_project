import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

import { API_URL } from '../../constants/index'
import CharacterList from '../characters/CharacterList'

class CharacterScreen extends Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    this.resetState()
  }

  getCharacters = () => {
    axios.get(API_URL).then((res) => this.setState({ characters: res.data }))
  }

  resetState = () => {
    this.getCharacters()
  }

  render() {
    return (
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col lg={6} className='mx-auto'>
              <CharacterList
                characters={this.state.characters}
                resetState={this.resetState}
              />
        
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CharacterScreen
