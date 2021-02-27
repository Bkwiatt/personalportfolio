import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Brandon Kwiatkowski</h2>
                        <img
                            src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                            alt="avatar"
                            style={{ height: "250px" }}
                        />
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>Feel free to reach out to me whenever!</p>

                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton", paddingLeft: "10rem" }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        <a href="tel:847-951-6388"> (847) 951-6388</a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton", paddingLeft: "10rem" }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        <a href="mailto: Bkwiat7@gmail.com">Bkwiat7@gmail.com</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;