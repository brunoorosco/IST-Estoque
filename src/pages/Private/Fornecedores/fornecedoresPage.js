import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';


const TableStyle = styled(Table)`
    min-width: 650px;
`
const Container = styled.div`
    padding: 16px;
`
const Header = styled.div`
    display: 'flex';
    width: '100%';
    flex-direction: 'row';
    margin-bottom: 15px;
    align-items: 'center';
`

const ButtonAdd = styled(Button)`
    height: 30;
`

function createData(codigo, name, quantidade, status, action) {
    return { codigo, name, quantidade, status, action };
}

const rows = [
    createData('Camisa', 159, 6.0, 24, 4.0),
    createData('Calça', 237, 9.0, 37, 4.3),
    createData('Shorts', 262, 16.0, 24, 6.0),
    createData('Camiseta', 305, 3.7, 67, 4.3),
    createData('Blusa', 356, 16.0, 49, 3.9),
];

export default function FornecedoresPage() {

    const history = useHistory()

    return (
        <Container>
            <Header>
                {/* <ServicosFilter value={filtroUnidade} onChange={setFiltroUnidade} /> */}

                <ButtonAdd
                    onClick={() => {
                           history.push("/fornecedores/novo")
                    }}
                   // startIcon={<AddIcon />}
                    variant="contained"
                    size="small"
                    color="primary">
                    Novo Fornecedor
                </ButtonAdd>
            </Header>
            <TableContainer component={Paper}>
                <TableStyle>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Código</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell align="right">Nome</TableCell>
                            <TableCell align="right">CNPJ</TableCell>
                            <TableCell align="right">Telefone</TableCell>
                            <TableCell align="right">Contato</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.codigo}>
                                <TableCell align="left">{row.codigo}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.quantidade}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">{row.action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableStyle>
            </TableContainer>
        </Container>
    );
}
