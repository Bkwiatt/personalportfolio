import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    {/* Right Side */}
                    <Cell col={4} style={{ backgroundColor: "lightblue", padding: "10px" }}>
                        <div style={{ textAlign: "center" }}>
                            <img
                                src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                                alt="avatar"
                                style={{ height: "200px" }}
                            />
                        </div>

                        <h2 stlye={{ paddingTop: "2em" }}>Brandon Kwiatkowski</h2>
                        <h4 style={{ color: "grey" }}>Programmer</h4>

                        <hr style={{ borderTop: '3px solid #833fb2', width: "50%" }} />

                        <p>
                            Highly motivated software developer constantly chasing improvement with a strong understanding of many core programming
                            concepts as well as a wide-range of languages, concepts and technologies. Supportive, likeable, and a responsible team player
                            who’s dedicated to mastering his craft and never settling for anything less than top level performance.
                        </p>

                        <hr style={{ borderTop: '3px solid #833fb2', width: "50%" }} />

                        <h5>Location</h5>
                        <p>Cary, IL</p>
                        <h5>Phone</h5>
                        <a href="tel:847-951-6388">(847) 951-6388</a>
                        <h5>Email</h5>
                        <a style={{ color: "black" }} href="mailto: Bkwiat7@gmail.com">Bkwiat7@gmail.com</a>
                        <h5>Web</h5>
                        <a href= "http://Bkwiatt.github.io">Bkwiatt.github.io</a>
                        <hr style={{ borderTop: '3px solid #833fb2', width: "50%" }} />
                    </Cell>

                    {/* Right Side */}
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2015}
                            endYear={2017}
                            schoolName={"Mchenry County College"}
                            schoolDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                        />
                        <Education
                            startYear={2018}
                            endYear={2019}
                            schoolName={"University of Wisconsin Whitewater"}
                            schoolDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                        />

                        <Education
                            startYear={2019}
                            endYear={2019}
                            schoolName={"The Tech Academy | C# & .NET Bootcamp"}
                            schoolDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                        />

                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName={"Southern New Hampshire University"}
                            schoolDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                        />

                        <hr style={{ borderTop: "3px solid #e22947" }} />

                        <h2>Experience</h2>
                        <Experience
                            startYear={2014}
                            endYear={2015}
                            jobName={"Best Buy"}
                            jobTitle={"Electronics Salesman"}
                            jobDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                        />

                        <Experience
                            startYear={2015}
                            endYear={2016}
                            jobName={"HK Mehchanical"}
                            jobTitle={"HVAC Apprentice"}
                            jobDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                        />

                        <Experience
                            startYear={2016}
                            endYear={2017}
                            jobName={"Precision Duct Design"}
                            jobTitle={"Sheet Metal Fabricator"}
                            jobDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                        />

                        <Experience
                            startYear={2019}
                            endYear={2021}
                            jobName={"Duraflex"}
                            jobTitle={"Warehouse Specialist"}
                            jobDescription={"uspendisse luctus ornare libero quis lobortis. Vivamus mauris justo, ultrices quis ligula in, hendrerit interdum ipsum. Maecenas eleifend ante id est elementum, eget tristique quam porta. Proin pharetra fringilla ante"}
                        />

                        <hr style={{ borderTop: "3px solid #e22947" }} />

                        <h2>Skills</h2>
                        <Skills
                            skill="C#"
                            progress={100}
                        />
                        <Skills
                            skill="HTML"
                            progress={90}
                        />
                        <Skills
                            skill="React"
                            progress={40}
                        />
                        <Skills
                            skill="iOS"
                            progress={60}
                        />
                        <Skills
                            skill="SQL"
                            progress={80}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;