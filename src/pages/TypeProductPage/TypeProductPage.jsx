import React from "react";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";
const TypeProductPage = () => {
    return (
        <div style={{ width: '100%', background: '#efefef', }}>
            <div style={{ width: "auto", margin: '0 120px' }}>
                <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                    <WrapperNavbar span={4}>
                        <NavBarComponent />
                    </WrapperNavbar>
                    <Col span={20}>
                        <WrapperProducts >
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                        </WrapperProducts>
                        <Pagination defaultCurrent={6} total={100} style={{ textAlign: 'center', marginTop: '10px' }} />
                    </Col>
                </Row>
            </div>
        </div>

    )
}
export default TypeProductPage