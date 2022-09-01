import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Row, Card, Container } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const { device } = useContext(Context)
    return (
        <Container>
            <Row xs={6} className="d-flex">
                {device.devices.map(device =>
                    <DeviceItem 
                    key={device.id}
                    device={device}
                    />
                )}
            </Row>
        </Container>
    )
})

export default DeviceList;