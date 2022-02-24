import { Row, Col, Space, Button } from "antd";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home">
            <Space direction="vertical">
                <Row justify="center">
                    <Col>
                        <div className="home-title">
                            <h1> Connect to all your Domin products </h1>
                        </div>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                        <div className="home-content">
                            <h3> Configure and access data from your devices remotely, in a secure manner</h3>
                        </div>
                    </Col>
                </Row>
                <div className="buttons">
                    <Row justify="center">
                        <Col xs={24} md={12} lg={12}>
                            <Link to="/dashboard">
                                <Button className="button-start" shape="round" size='large'> Get Started</Button>
                            </Link>
                        </Col>
                    </Row>
                    <br />
                    <Row justify="center">
                        <Col xs={24} md={12} lg={12}>
                            <Button className="button-login" shape="round" size='large'> Log in</Button>
                        </Col>
                    </Row>
                </div>
            </Space>
            <style jsx global>
            {`
                .home {
                    margin: 15px;
                    padding-top: 150px;
                    text-align: center;
                }
                .home-content h3 {
                    color: #A9A9A9;
                }
                .button-start {
                    width: 100%;
                    color: white;
                    background-color: #20677c
                }
                .button-login {
                    width: 100%;
                    color: white;
                    background-color: #6b6b6b;
                }
                .buttons {
                    margin: 15px;
                    padding-top: 50px;
                }
            `}
            </style>
            </div> 
        );
    }  
export default Home;