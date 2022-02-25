import {useParams } from "react-router-dom";
import { Card, Col, Row, Image, Space, Tabs } from 'antd';
import useFetch from "../hooks/useFetch";

const { TabPane } = Tabs;
const ProductDetails = () => {
    const {id} = useParams();
    const {data: product, error, isPending} = useFetch(`http://localhost:8001/collections/${id}`);
    return (
        <>
        <Row>
                        {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <Col xs={24} md={12} lg={12} key={product.id}>
                <Card key={product.id} 
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
            </Col>
        </Row>
        <Row>
            <Col>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Info" key="1">
                    Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Configure" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Reports" key="3">
                    Content of Tab Pane 3
                    </TabPane>
                </Tabs>
        </Col>
    </Row>
              </>
    );
}
 
export default ProductDetails;