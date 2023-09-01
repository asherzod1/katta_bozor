import React, {useEffect, useState} from 'react';
import { EyeOutlined } from '@ant-design/icons';
import { Card, Col, Row, Spin} from 'antd';
import axios from "axios";
import {Link} from "react-router-dom";
const { Meta } = Card;

function Home(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
       axios.get("https://www.kattabozor.uz/hh/test/api/v1/offers").then(res => {
           setData(res.data?.offers)
           console.log(res.data)
           setLoading(false)
       })
    },[])

    return (
        <div className={"containerr"}>

            { loading ?
                <div className={"flex justify-center h-[50vh] items-center"}>
                    <Spin size={"large"} />
                </div>
                :
                <div>
                    <h3 className={"text-[20px] font-semibold mb-3"}>Products:</h3>
                    <Row gutter={[16,16]}>
                        {
                            data?.map((item, index) => (
                                <Col span={6} md={8} sm={12} xs={24} xl={6} key={item.id}>
                                    <Link to={`/product/${item.id}`}>
                                        <Card
                                            style={{
                                                width: '100%',
                                            }}
                                            cover={
                                                <img
                                                    alt="example"
                                                    src={item?.image?.url}
                                                    className={"w-full h-[200px] object-contain"}
                                                />
                                            }
                                            hoverable={true}
                                            actions={[
                                                <div className={"flex items-center gap-3 justify-center"}>
                                                    <EyeOutlined style={{fontSize:"20px"}} key="view" />
                                                    <span className={"font-semibold"}>View</span>
                                                </div>,
                                            ]}
                                        >
                                            <Meta
                                                title={item?.name}
                                                description={<div>
                                                    Brand: {item?.brand} <br/>
                                                    Merchant: {item?.merchant}
                                                </div>}
                                            />
                                        </Card>
                                    </Link>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            }
        </div>
    );
}

export default Home;
