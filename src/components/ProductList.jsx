import { Link } from "react-router-dom";
import { Card, Col, Row, Image, Space } from 'antd';

const ProductList = (props) => {
    const {products, title} = props;
    return (
        <div className="product-list">
            <Row>
             {products.map((product)=> (
                 <Col xs={24} md={12} lg={12} key={product.id}>
                     <Link to={`/collections/${product.id}`}>
                        <Card
                            hoverable={true} 
                            style={{ padding: 0, margin: 5, color: '#6b6b6b' }}
                        >
                                <Space>
                                    <Image width={180} alt="example" src={product.image} preview={false}/>
                                    <Space direction="vertical">
                                        <span><span style={{color: '#00aec7'}}>S/N:</span> {product.code}</span>
                                        <span><span style={{color: '#00aec7'}}>Type: </span>{product.type}</span>
                                        <span><span style={{color: '#00aec7'}}>Location:</span> {product.location}</span>
                                        <span style={{color: product.status === 'Active'? '#0C643E': '#E73823', fontWeight: 'bold'}}><span style={{color: '#00aec7'}}>Status: </span>{product.status}</span>
                                    </Space>
                                </Space>
                        </Card>
                    </Link>
                    <br />
                </Col>
            ))}
            </Row>
            <style jsx global>
            {`
                .home {
                    margin: 15px;
                    padding-top: 80px;
                }
                .product-list span {
                    color: #6b6b6b;
                    font-size: 14px;
                }
            `}
            </style>
        </div>
      );
}
 
export default ProductList;