import { Row, Col, Image,Divider } from 'antd';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <div className='Nav'>
        <Row>
            <Col>
                <Image
                    width={100}
                    src='images/logo.jpeg'
                    />
            </Col>
            <Col>
            <Link to ="/">
              <div className="logo">
                <p>DOMIN </p>
                <span>ASCEND</span>
                </div>
            </Link>
            </Col>
        </Row>
        <Divider />
        <style jsx global>
        {`
            .logo {
                color: black;
                padding-top: 30px;
                font-size: 18px;
                font-weight: bold;
                line-height: 0.5;
              }
              .logo span {
                color: #6b6b6b;
              }
              `}
          </style>
 </div>)}
export default NavBar;