import React, { Component } from 'react';
import ChirprForm from './ChirprForm';
import ChirpList from './ChirpList';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [
                { text: "My first chirp" , id: 0 },
                { text: "Chirp Chirp", id: 1 },
                { text: "Yo Bro have you seen this Chirp", id: 2 }
            ]
        };
    }

    componentDidMount() {
        this.getChirps();
    }

    getChirps() {
        this.setState({
            chirps: [...this.state.chirps]
        });
    }

    postChirp(chirp) {
        this.state.chirps.push(chirp);
        this.getChirps();
    }

    handleSubmit(chirp) {
        let chirps = this.state.chirps;
        let id = 0;

        if (chirps.length > 0) {
            id = Number(chirps[chirps.length - 1].id) + 1;
        }

        this.postChirp({
            text: chirp.value,
            id
        });
    }

    handleDestroy(id) {
        this.setState({
            chirps: this.state.chirps.filter((chirp) => {
                return chirp.id !== id;
            })
        });
    }

    render() {
        return (
            <div className='chirps-container col-mid'>
                <ChirprForm onSubmit={(chirp) => { this.handleSubmit(chirp); }} />
                <ChirpList onDestroy={(id) => { this.handleDestroy(id); }} chirp={this.state.chirps} />
            </div>
        );
    }
}

export default Home;