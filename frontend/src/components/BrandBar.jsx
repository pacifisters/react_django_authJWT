import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Row, Card, Container } from "react-bootstrap";

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <Container>
            <Row xs={6} className="d-flex">
                {device.brands.map(brand =>
                    <Card
                        onClick={() => device.setSelectedBrand(brand)}
                        style={{ cursor: 'pointer' }}
                        key={brand.id}
                        className="p-3"
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    >
                        {brand.name}
                    </Card>
                )}
            </Row>
        </Container>
    )
})

export default BrandBar;