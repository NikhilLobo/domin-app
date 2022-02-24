import ProductList from "./ProductList";
import useFetch from "../hooks/useFetch";
import { Input, Row, Col } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import { useState } from "react";

const Dashboard = () => {
    const {data: products,isPending,error} = useFetch('http://localhost:8001/collections');
    const [searchItem, setSearchItem] = useState('')
    return ( 
        <div className="dashboard">
        <Row>
            <Col xs={24} md={5} lg={5}>
                <Input value={searchItem} onChange={(e)=> setSearchItem(e.target.value)} placeholder="Basic usage" addonBefore={<SearchOutlined />} />
            </Col>  
        </Row>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {products && <ProductList products={products} title="All Products!" />}
        {searchItem}
        <style jsx global>
            {`
                .dashboard {
                    margin: 15px;
                }
            `}
            </style>
    </div>
     );
}
 
export default Dashboard;