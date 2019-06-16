import React, { Component } from 'react'
import api from '../services/api'

import './New.css'

class New extends Component {
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleChangeImage = event => {
        this.setState({ image: event.target.files[0] })
    }

    handleSubmit = async event => {
        event.preventDefault()
        
        const data = new FormData()
        data.append('image', this.state.image)
        data.append('author', this.state.author)
        data.append('place', this.state.place)
        data.append('description', this.state.description)
        data.append('hashtags', this.state.hashtags)

        await api.post('posts', data)
        this.props.history.push('/')
    }

    render() {
        return (
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" namge="image" onChange={this.handleChangeImage} />
                <input type="text" name="author" placeholder="Autor do post" onChange={this.handleChange} value={this.state.author} />
                <input type="text" name="place" placeholder="Local do post" onChange={this.handleChange} value={this.state.place} />
                <input type="text" name="description" placeholder="Descrição do post" onChange={this.handleChange} value={this.state.description} />
                <input type="text" name="hashtags" placeholder="Hashtags do post" onChange={this.handleChange} value={this.state.hashtags} />
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default New