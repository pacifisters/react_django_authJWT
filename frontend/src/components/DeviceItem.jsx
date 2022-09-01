import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from '../assets/star.png';
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useNavigate()
    console.log(history)
    return (
        <Col md={3} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} src={device.img} />
                <div>
                    <div>Samsung...</div>
                    <div className="justify-content-between align-items-center text-black-50">
                        <div>{device.rating}</div>
                        <Image width={15} src={star} />
                    </div>
                    <div>{device.name}</div>
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem;