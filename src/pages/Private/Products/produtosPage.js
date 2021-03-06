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
    height: 30px;
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

export default function ProductsPage() {

    const history = useHistory()

    return (
        <Container>
            <Header>
                {/* <ServicosFilter value={filtroUnidade} onChange={setFiltroUnidade} /> */}

                <ButtonAdd
                    onClick={() => {
                        history.push("/produto/novo")
                    }}
                    // startIcon={<AddIcon />}
                    variant="contained"
                    size="small"
                    color="primary">
                    Novo Produto
                </ButtonAdd>
            </Header>
            <TableContainer component={Paper}>
                <TableStyle aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Código</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell align="right">Quant.</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Ação</TableCell>
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
