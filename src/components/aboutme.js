import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Aboutme extends Component {
    render() {
        return (
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        alt="avatar"
                        className="avatar-img"
                    />

                    <div className="about-me-text">
                        <h1>About me</h1>

                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Aboutme;