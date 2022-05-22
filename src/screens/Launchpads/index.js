import * as React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import LaunchesList from "../../components/LaunchesList";
import axios from "axios";
import ReactLoading from "react-loading";
import { Fade } from "react-reveal";

function Launchpads() {
    const [launchpads, setLaunchpads] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const cardStyle = {
        width: '100%',
        marginTop: 20
    }

    const viewButtonsStyle = {
        display:"flex",
        alignItems:"center",
        justifyContent: "center",
        width: "3rem",
    }

    React.useEffect(()=>{
        axios.get("https://api.spacexdata.com/v4/launchpads").then((launchpads)=>{
            setLaunchpads(launchpads.data)
            setLoading(false)
        })
    }, [])

    return (
        <div className="Launchpads">
            <Container>
                <Row>
                    <Col>
                        <h2>Launchpads</h2>
                    </Col>
                </Row>

                {loading &&
                <div style={{marginTop: 15}}>
                    <ReactLoading type="spin" color="#0000FF"
                        height={100} width={50} />
                </div>
                }

                <Row>
                    {
                        launchpads.map((launchpad, i)=>
                            <Fade>
                                <Card style={cardStyle} key={i}>
                                    <Card.Body>
                                        <Row>
                                            <Col style={{display: "flex", justifyContent: "center"}}>
                                                <Card.Img src={launchpad.images.large} alt={launchpad.name+" image"} />
                                            </Col>
                                            <Col>
                                                <Card.Title>{launchpad.name}</Card.Title>
                                                <Card.Text>
                                                {launchpad.details}
                                                </Card.Text>
                                                <Card.Subtitle style={{marginBottom: 5}}>Top 3 Launches</Card.Subtitle>
                                                <LaunchesList launchpad_id={launchpad.id} />
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Fade>
                        )
                    }
                </Row>

            </Container>
        </div>
    );
}

export default Launchpads;
