import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am{" "}
                        <span className="purple">Denys Holiak </span>
                        from{" "}
                        <span className="purple"> Druzhkivka, Ukraine.</span>
                        <br /><br />
                        I am motivated, responsible, organized developer. It is
                        very important for me to write high quality, fast and
                        efficient code. I pay special attention to the
                        architecture of the application to make it logical,
                        consistent and understandable. This allows the
                        application to be more flexible and extensible, which is
                        very important. I am always interested in personal
                        growth as an individual and programmer, as well as
                        company growth!
                        <br />
                        <br />
                        I have completed Bachelor's Degree in Computer Sciences
                        at Donbass State Engineering Academy.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Video Games with friends
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Playing Sports
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Denys</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
