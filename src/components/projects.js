import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: 450, margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ipsum, commodo at sem sed
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{ minWidth: 450, margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ipsum, commodo at sem sed
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 3*/}
                    <Card shadow={5} style={{ minWidth: 450, margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>React Project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ipsum, commodo at sem sed
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: 450, margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.pewresearch.org/wp-content/uploads/2019/02/FT_19.02.08_Algorithms_feature.jpg) center / cover' }}>Data Structures #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ipsum, commodo at sem sed
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{ minWidth: 450, margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', fontWeight:"bold", height: '176px', background: 'url(https://www.pewresearch.org/wp-content/uploads/2019/02/FT_19.02.08_Algorithms_feature.jpg) center / cover' }}>Data Structures #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ipsum, commodo at sem sed
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: 450, margin: 'auto'}}>
                        <CardTitle style={{ color: 'black', fontWeight: "bold", height: '176px', background: 'url(https://i.pcmag.com/imagery/reviews/01jaM8kuRDQ9sA9pfKgAKmm-80..1597092024.png) center / cover' }}>iOS Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ipsum, commodo at sem sed
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{ minWidth: 450, margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', fontWeight: "bold", height: '176px', background: 'url(https://i.pcmag.com/imagery/reviews/01jaM8kuRDQ9sA9pfKgAKmm-80..1597092024.png) center / cover' }}>iOS Project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ipsum, commodo at sem sed
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 3*/}
                    <Card shadow={5} style={{ minWidth: 450, margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', fontWeight: "bold", height: '176px', background: 'url(https://i.pcmag.com/imagery/reviews/01jaM8kuRDQ9sA9pfKgAKmm-80..1597092024.png) center / cover' }}>iOS Project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ipsum, commodo at sem sed
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{ minWidth: 450, margin: 'auto'}}>
                        <CardTitle style={{ color: '#fff', fontWeight: "bold", height: '176px', background: 'url(https://svitla.com/uploads_converted/0/2135-database_management_software.webp?1560161553) center / cover' }}>SQL Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ipsum, commodo at sem sed
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{ minWidth: 450, margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', fontWeight: "bold", height: '176px', background: 'url(https://svitla.com/uploads_converted/0/2135-database_management_software.webp?1560161553) center / cover' }}>SQL Project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ipsum, commodo at sem sed
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>                    
                </div>
            )
        }
    }




    render() {
        return (
            <div className="category-table">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>React</Tab>
                    <Tab>Data Structures</Tab>
                    <Tab>iOS</Tab>
                    <Tab>SQL</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;