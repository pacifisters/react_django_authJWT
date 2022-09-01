import React from "react";
import { Container, Col, Row, Image, Card, Button } from "react-bootstrap";

const DevicePage = () => {
    const device = { id: 1, name: 'iphone 12', price: '30 000 rub', rating: 1, img: 'https://yandex-images.clstorage.net/9V7in3W72/c32e97SggigF/BHIahQAhY5K77acJfCzOso6f96SQK0RsFdI8gSjNRkk6_YEEoG_oayH-kL_gFae47Yhavz6kkPHb7cJVUebsIDBHbvFhRWNDXxxHSKi937c-r4fUAK5l-eDiyYEZqFOdOligkKCvjp1TyQeJV8MVOspP7lq-YfUwOmyGk6eGOhZ10pjEhHFAkOwPthnMDk0U7I9WoWLc157TVGxXbaqj357qkpLHaQ-_kuiXWOdSdsiYvI26jHGGQ12dZJHEEZl39qNLhQYQ0ZPvfARJvQwd9V6NFaLhPGS88ORdNk2aUw89S9IyNljsLcB5l8qHQsdpOE1tWaxxNQAd7oUA1pIpp8dhSWR0ApBQn1zUm88_jfcN3NXBIoyGLhLVTnavqgO8jkvyMsborn4CeeTJpmKUyGiMPFhfsxRzzb0VY_SjmkSHUGq29BLQw8_fZdtOXE1nbR1GgIJ9xr4AppxFjOjiXp66cUCEKzx-83gWuydRd5naDE6LjEKFgu-8x5MF8Xu39RLItBfhAMFMLrQZX-0fJT8fFmLSDZacs6Z8x0_rQcxvGOFxxUq93hDpZLglcTcae_1-uvxBJMCOryeC5zK4ZCXzq3UXk0FQr06Xa_3-jjYenobQsvxVv2LFX-d8ajBOvcqxYMeq_wzQyUTYBSLVuotdXkocMYRCnv3Uovag2GdlURtUlGNxwL18t_i-vxyU3D4GMHI-N15BF-wkvfgjDK8akQK164-843iGOEcjd_iIHW24juC3swz9NfH1MNt2d_LLJIWhwYN-XbQ5Xj6OtM5u14KSfKYegXZdtp1rU52euuAR1ZuuDpELRoolwkXKOu3fin7ghBI_nRdxRQF6FAURKzamQLOAnawnCB497Ybs_xQAwswFXPBGTPacyRLOv5uTIjdbD_0z6wf7xxG22cv-PVp-ADbhTH-1AMZjSbYVIVrVtaMxcL08lcsOzgwVLT6WQTLepn9CZr42c' }
    const description = [
        { id: 1, title: 'Оперативная память', description: '5 gb'},
        { id: 2, title: 'Камера', description: '15 мп'},
        { id: 3, title: 'Процессор', description: 'Пентиум 2'},
        { id: 4, title: 'Кол-во ядер', description: '8'},
        { id: 5, title: 'Аккумулятор', description: '9640'},
    ]
    return (
        <Container className="mt-2">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>{device.name}</h2>
                        <div className="background_star">
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    >
                        <h3>{device.price}</h3>
                        <Button variant={'outline-dark'}>добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>характеристики</h2>
                {description.map(info =>
                <Row key={info.id} style={{background: info.id % 2 === 0 && 'lightgray', padding: 10}}>
                    {info.title}: {info.description}
                </Row>

                    )}
            </Row>
        </Container>
    );
};

export default DevicePage;