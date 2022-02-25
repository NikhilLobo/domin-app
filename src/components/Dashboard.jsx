import ProductList from "./ProductList";
import useFetch from "../hooks/useFetch";
import { Input, Row, Col, Dropdown, Menu, Button, Space } from 'antd';
import {SearchOutlined, DownOutlined, PlusCircleOutlined} from '@ant-design/icons';
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const {data: products,isPending,error} = useFetch('http://localhost:8001/collections');
    const [searchItem, setSearchItem] = useState('')
    return ( 
        <div className="dashboard">
        <Row>
                <Col xs={24} lg={6} xl={6}>
                    <Input value={searchItem} onChange={(e)=> setSearchItem(e.target.value)} placeholder="Search by S/N" addonBefore={<SearchOutlined />} />
                </Col>
                <Space>
                <Col>
                    <Dropdown
                        overlay={
                        <Menu>
                            {products.map((item) => (
                            <Menu.Item  onClick={() => setSearchItem(item.type)}>
                                {item.type}
                            </Menu.Item>
                            ))}
                        </Menu>
                        }
                    >
                        <Button>Product Type <DownOutlined /></Button>
                    </Dropdown>
                </Col>
                <Col xs={6}>
                    <Dropdown
                        overlay={
                        <Menu>
                            {products.map((item) => (
                            <Menu.Item onClick={() => setSearchItem(item.location)} >
                                {item.location}
                            </Menu.Item>
                            ))}
                        </Menu>
                        }
                    >
                        <Button>Location <DownOutlined /></Button>
                    </Dropdown>
                </Col>
                <Col xs={6}>
                    <Button onClick={() => setSearchItem('')}>Clear Filters</Button>
                </Col>
                <Col xs={6}>
                <Link to="/add"><PlusCircleOutlined style={{ fontSize: '150%'}}/> </Link>
                </Col>
            </Space>
        </Row>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {products && <ProductList products={products.filter((product) => (product.code.includes(searchItem) || product.type.includes(searchItem) || product.location.includes(searchItem)))} title="All Products!" />}
        <style jsx global>
            {`
                .dashboard {
                    margin: 15px;
                }
                .dashboard Input {
                    background-color: #D5D8D7;
                }
            `}
            </style>
    </div>
     );
}
 
export default Dashboard;