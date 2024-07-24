import React from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import DataArrayIcon from '@mui/icons-material/DataArray';
import {
    Container,
    Content,
    TableDiv,
    ActionDiv,
    EmptyDiv,
} from './styles';
import AccountMenu from "../../Components/Menu";
import ModalComponent from "../../Components/Modal";
import { Row } from "react-bootstrap";
import { getUser } from "../../Services/user";
import moment from "moment";
import Empty from '../../Assets/empty.svg';


const MainPage = () => {

    const [users, setUsers] = React.useState([]);
    const [search, setSearch] = React.useState('');

    const getUsers = async () => {
        try {
            const response = await getUser();
            setUsers(response);
            console.log(response);
        } catch (error) {

        }
    }

    React.useEffect(() => {
        getUsers();
    }, [])

    return (
        <Container>
            <AccountMenu />
            <Content>
                <ActionDiv>
                    <Row >
                        <Form.Control
                            placeholder="Pesquisar"
                            aria-label="Pesquisar"
                            aria-describedby="basic-addon2"
                            type="text"
                            value={search} onChange={(e) => setSearch(e.target.value)}
                        />
                    </Row>
                    <ModalComponent update={getUsers} />
                </ActionDiv>
                <TableDiv>
                   {users.length === 0 ? 
                   <EmptyDiv>
                         <img src={Empty} alt='emprty' />
                         <span>Não há usuários cadastrados</span>
                   </EmptyDiv> :
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>email</th>
                            <th>Adimissão</th>
                            <th>Criação</th>
                            <th>Edição</th>
                            <th>Status</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.filter((user) => {
                            if (search === "") {
                                return user
                            } else if (user.name.toLowerCase().includes(search.toLowerCase()) ||
                                user.email.toLowerCase().includes(search.toLowerCase()) ||
                                user.status.toLowerCase().includes(search.toLowerCase())) {
                                return user
                            } else {
                                return null
                            }
                        })?.map((user) =>
                            <tr style={{cursor: 'pointer'}}>
                            <td>{user?.id}</td>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{moment(user?.admission).format('DD/MM/YYYY')}</td>
                            <td>{moment(user?.created_at).format('DD/MM/YYYY')}</td>
                            <td>{moment(user?.updated_at).format('DD/MM/YYYY: HH:mm')}</td>
                            <td>{user?.status} </td>
                            <td><ModalComponent action="edit" update={getUsers} id={user?.id} pName={user?.name} pEmail={user?.email} pDate={moment(user?.admission).format('YYYY-MM-DD')} pStatus={user?.status} /></td>
                        </tr>
                        )}
                    </tbody>
                </Table>}
                </TableDiv>

            </Content>
        </Container>
    )
}

export default MainPage;