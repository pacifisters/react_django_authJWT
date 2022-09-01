import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, Nav, Row } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registration, login } from "../http/userAPI";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const Auth = observer (() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);            
            }
            user.setUser(user)
            user.setIsAuth(true)
            history(SHOP_ROUTE)  
        } catch (e) {
            alert(e.response.data.message)
        }
             
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight = 700 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Autorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш е-мэйл..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш parol"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                нет аккаунта? <Nav.Link as={Link} to={REGISTRATION_ROUTE}> зарегайся чепушЬ! </Nav.Link>
                            </div>
                            :
                            <div>
                                есть аккаунт? <Nav.Link as={Link} to={LOGIN_ROUTE}> войдите </Nav.Link>
                            </div>
                        }

                        <Button
                            className="mt-3 align-self-end"
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'войти' : 'регистрация'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;