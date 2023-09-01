import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Button, Spin} from "antd";
import { LeftOutlined } from '@ant-design/icons';

function ProductDetail(props) {
    const {id} = useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(id)
    useEffect(() => {
        axios.get("https://www.kattabozor.uz/hh/test/api/v1/offers").then(res => {
            setData(res.data?.offers.find(item => item.id === Number(id)))
            setLoading(false)
        })
    },[id])
    console.log(data)
    return (
        <div className={"containerr"}>
            <Link to={"/"}>
                <Button>
                    <div className="flex items-center gap-2">
                        <LeftOutlined />
                        Back
                    </div>
                </Button>
            </Link>
            {
                loading ?
                <div className={"flex justify-center h-[50vh] items-center"}>
                    <Spin size={"large"} />
                </div>
                    :
                    <div className="mt-4">

                        <div className={"flex gap-[30px] flex-wrap"}>
                            <div className={"max-w-[100%] md:max-w-[40%]"}>
                                <img src={data?.image?.url} alt="img"/>
                            </div>
                            <div>
                                <h1 className={"text-[24px] my-0 font-semibold"}>{data?.name}</h1>
                                <p className={"text-[14px] my-0"}>Brand: {data?.brand}</p>
                                <p className={"text-[14px] my-0"}>Merchant: {data?.merchant}</p>
                                <p className={"text-[14px] my-0"}>Category: {data?.category}</p>
                                {
                                    data?.attributes?.map(item=>(
                                        <p className={"text-[14px] my-0"}>{item.name}: {item?.value}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

export default ProductDetail;
