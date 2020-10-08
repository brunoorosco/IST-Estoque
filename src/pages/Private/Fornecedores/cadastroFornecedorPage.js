import React, { useState, useEffect } from 'react'
import { Link, useHistory, } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

//import Alert from '../../../components/Alert'

import api from '../../../services/api';

import './styles.css';

export default function CadastroFornecedorPage({ onSubmit }) {

    const history = useHistory();

    const [messageAlert, messageAlertSet] = useState([]);
    const [alert, alertSet] = useState("none");
    const [vars, setVars] = useState({
        cnpj: "",
        name: "",
        email: "",
        number: "",
        contact: "",
        street: "",
        city: "",
        state: "",
        telephone: "",
        celular: ""
    })

    async function handleCnpj() {
        const data = {
            cnpj: vars.cnpj
        }
        //  console.log(data);

        try {
            await api.get('cnpj/' + data.cnpj).then(response => {
                console.log(response.data)
                if (response.data.status !== 'ERROR') {
                    setVars({
                        ...vars,
                        name: response.data.nome,
                        number: response.data.numero,
                        telephone: response.data.telefone,
                        street: response.data.logradouro,
                        city: response.data.municipio,
                        state: response.data.uf,

                    })
                } else {
                    console.log(`Erro ao cadastrar ${response.data}`)
                    if (window.confirm(`Erro ao buscar CNPJ ${response.data.mensagem}`)) this.onCancel()
                }

            })

            // history.push('/dashboard')
        } catch (error) {
            messageAlertSet(`Erro ao cadastrar ${error}`)
        }
    }

    async function handleSubmit(e) {

        e.preventDefault();
        const data = vars;

        // console.log(data);

        try {
            await api.post('fornecedor', data, {
                headers: {
                    //       Authorization: ongId,
                }
            }).then(response => {
                console.log(response.data)
            })
            history.push('/fornecedor')
        } catch (error) {
            messageAlertSet(`Erro ao cadastrar ${error}`)
        }
    }

    function handleChange(evt) {
        evt.preventDefault();

        const value = evt.target.value;
        setVars({
            ...vars,
            [evt.target.name]: value
        });
        //  console.log(value)
    }

    return (

        <Card className="container">

            <CardHeader

                title="Cadastro de Fornecedor"

            />
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <TextField
                                label="CNPJ"
                                name="cnpj"
                                value={vars.cnpj}
                                onChange={handleChange}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                            <IconButton tonClick={handleCnpj} aria-label="search">
                                <SearchIcon />
                            </IconButton>

                        </Grid>

                        <Grid item xs={3} >
                            <TextField
                                label="Razão Social"
                                name="name"
                                value={vars.name}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid >


                    </Grid>

                    <Grid container spacing={5}>
                        <Grid item xs={3}>

                            <TextField
                                fullWidth
                                label="Rua/Avenida/Praça"
                                name="street"
                                value={vars.street}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextField
                                label="Nº"
                                maxLength="5"
                                name="number"
                                value={vars.number}
                                onChange={handleChange}
                                fullWidth
                            />

                        </Grid>

                        <Grid item xs={2} >

                            <TextField
                                label="Cidade"
                                name="city"
                                value={vars.city}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid >

                        <Grid item xs={1}>

                            <TextField
                                fullWidth
                                label="UF"
                                name="state"
                                value={vars.state}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>










                    <Grid container spacing={3}>
                        <Grid item xs={2}>

                            <TextField 
                                label="Telefone"
                                name="telephone"
                                value={vars.telephone}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                fullWidth
                                label="Celular"
                                name="celular"
                                value={vars.celular}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                label="Contato"
                                name="contact"
                                value={vars.contact}
                                onChange={handleChange}
                                fullWidth
                            />

                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="E-mail"
                                name="email"
                                value={vars.email}
                                onChange={handleChange}
                                fullWidth
                            />

                        </Grid>
                    </Grid>


                    <Button type="submit">Cadastrar</Button>
                </form >

            </CardContent >
        </Card >
    )
}