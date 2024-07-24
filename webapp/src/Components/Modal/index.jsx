import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {
    DivAction,
} from './styles';
import { deleteUser, postUser, putUser } from '../../Services/user';

const ModalComponent = ({ update, action, id, pName, pEmail, pDate, pStatus }) => {
    const [show, setShow] = useState(false);
    const [created, setCreated] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const [name, setName] = useState(pName);
    const [email, setEmail] = useState(pEmail);
    const [status, setStatus] = useState(pStatus);
    const [admission, setAdmission] = useState(pDate);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const cleanForm = () => {
        setName('');
        setEmail('');
        setStatus('');
        setAdmission('');
        setValidated(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            try {
                if (action === "edit") {
                    await putUser(email, name, status, admission, id);
                } else {
                    await postUser(email, name, status, admission);
                }
                setCreated(true);
                update();
                setTimeout(() => {
                    setShow(false);
                    setCreated(false);
                    if (action !== "edit") {cleanForm();}
                }, 4000);
            } catch (error) {
                if (error?.response?.data?.message?.errorInfo[1] === 1062) {
                    setError(true);
                    setErrorMessage("Esse email já foi cadastrado");
                    setTimeout(() => {
                        setError(false);
                    }, 8000);
                }
            }
        }
        setValidated(true);
    };

    const deleteFunc = async () => {
        try {
            await deleteUser(id);
            update();
            setShow(false);
        } catch (error) {

        }
    }

    return (
        <>
            {action === 'edit' ?
                <Button variant="primary" onClick={handleShow}>
                    <RemoveRedEyeIcon />
                </Button> :
                <Button variant="primary" onClick={handleShow}>
                    Adicionar Usuário
                </Button>
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="6" controlId="name">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    type="text"
                                    placeholder="Nome"
                                    value={name}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="3" controlId="status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" placeholder="Status" required value={status}
                                    onChange={(e) => setStatus(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} md="9" controlId="admission">
                                <Form.Label>Data de Adimissão</Form.Label>
                                <Form.Control type="date" placeholder="Data de Adimissão" required value={admission} onChange={(e) => { setAdmission(e.target.value); console.log(e.target.value) }} />
                            </Form.Group>
                        </Row>
                        <DivAction>
                            {action === 'edit' ? <Button type="submit">Editar Usuário</Button> : <Button type="submit">Criar Usuário</Button>}
                        </DivAction>
                    </Form>
                </Modal.Body>
                {created &&
                    <Alert variant="success">
                        Criado com sucesso
                    </Alert>
                }
                {error &&
                    <Alert variant="danger">
                        {errorMessage}
                    </Alert>
                }
                {action === 'edit' &&
                    <Modal.Footer>
                        <Button variant="danger" onClick={deleteFunc}>
                            Deletar
                        </Button>
                    </Modal.Footer>}

            </Modal>
        </>
    );
}

export default ModalComponent;