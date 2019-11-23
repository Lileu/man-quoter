import React, { Component } from 'react';
import axios from 'axios';

class Profiles extends Component {
    constructor (props) { 
        super(props) 
        this.state = {
            profiles: []
        }
    }
    

    componentDidMount() {
       this.fetchProfiles();
    }

    renderProfiles() {
        return this.state.profiles.map((profile, i) => {
            return <div key={i}>
                <h2>{profile.first_name}</h2>
            </div>
        })
    }

    fetchProfiles = async () => {
        const response = await axios.get('users/profiles')
        const profiles = response.data;
        this.setState({
            profiles: profiles
        })
    }


    render () {
        console.log(this.state.profiles)
        return (
            <div>
                {this.renderProfiles()}
            </div>
        )
    }
}

export default Profiles