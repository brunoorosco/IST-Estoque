import React, { useState, useEffect } from 'react';
//import DatePicker from "react-datepicker";
import moment from 'moment'
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
import InputLabel from '@material-ui/core/InputLabel'
// import api from '../../../services/api'
// import InputMoney from '../../InputMoney'
//import SelectFornecedor from '../../../components/SelectFornecedor'
// import SelectMaterial from '../../SelectMaterial'

import "./styles.css"

const CadastroProdutoPage = ({ onSubmit }) => {

  const [forn, setForn] = useState([]);
  const [material, setMaterial] = useState({
    code: "",
    name: "",
    price: "",
  });
  const [price, setPrice] = useState("");
  const [options, setOptions] = useState([]);
  const [listMaterial, setListMaterial] = useState([
    {
      value: 'kg',
      label: 'Kilograma',
    },
    {
      value: 'pc',
      label: 'Peças',
    },]);
  const [disableInput, setDisableInput] = useState(false)
  const [total, setTotal] = useState('')
  const [currency, setCurrency] = React.useState('BRL');
  const [fornecedor, setFornecedor] = useState([]);

  const [newItem, setNewItem] = useState({
    notaFiscal: "",
    dataEntrada: moment(Date()).format("DD-MM-YYYY"),
    fornecedor_id: "",
    quantity: 1,
    code: "",
    material_id: "",
    material: "material",
    unitPrice: "",
    totalPrice: 0,
  });


  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'BRL',
      label: 'R$',
    },
  ];

  const listFornecedor = [
    {
      'id': '1',
      'name': 'EmpresaX'
    },
    {
      'id': '2',
      'name': 'EmpresaY'
    }
  ]



  //    useEffect(() => {
  //     setNewItem({
  //       ...newItem,
  //      fornecedor_id: forn,
  //     })
  //   }, [forn])


  //   useEffect(() => {
  //    api.get('material').then(response => {
  //       setListMaterial(response.data);
  //     })
  //   }, [setListMaterial])


  //   useEffect(() => {

  //     const valor = (parseFloat(newItem.quantity) * parseFloat(price))

  //     if (!isNaN(valor)) {
  //       setNewItem({
  //         ...newItem,
  //         totalPrice: valor,
  //         unitPrice: price
  //       })
  //     } else {
  //       setNewItem({
  //         ...newItem,
  //         totalPrice: 0,
  //       })
  //     }
  //   }, [newItem.quantity, price])

  function setNewTask(evt) {

    evt.preventDefault();
    const value = evt.target.value;
    const name = evt.target.name;
    setNewItem({
      ...newItem,
      [name]: value
    });

  }

  function setNewTaskData(data) {
    //setStartDate(data)
    setNewItem({
      ...newItem,
      dataEntrada: moment(data).format("DD-MM-YYYY")
    })
  }

  function handleChange(evt) {
    evt.preventDefault();
    const value = evt.target.value;
    setNewItem({
      ...newItem,
      [evt.target.name]: value,
    });
  }

  function handleSelect(evt) {
    evt.preventDefault();
    const codeMaterial = listMaterial[evt.target.options.selectedIndex - 1].code; //função retorna valor da code do material selecionado
    const nameMaterial = listMaterial[evt.target.options.selectedIndex - 1].description; //função retorna valor da code do material selecionado
    const value = evt.target.value;

    setNewItem({
      ...newItem,
      [evt.target.name]: value,
      code: codeMaterial,
      material: nameMaterial
    });
  }


  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
    setNewItem({
      ...newItem,
      quantity: "",
      unitPrice: "",
      totalPrice: "",
      material: "material",

    })
    setPrice(0)
    setDisableInput(true)
  }

  return (

    <Card className="container">

      <CardHeader

        title="Cadastro de Produto"

      />
      <CardContent>
        <form onSubmit={submit} autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <TextField
                fullWidth
                label="Cód. do Produto"
                name="code"
                onChange={setNewTask}
                defaultValue={newItem.code}
                disabled={disableInput}
              />
            </Grid>

            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Descrição do Produto"
                name="descricao"
                onChange={setNewTask}
                disabled={disableInput}

              />

            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                label="NF / Cupom Fiscal"
                name="notaFiscal"
                onChange={setNewTask}
                disabled={disableInput}

              />

            </Grid>


            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="fornecedor">Fornecedor</InputLabel>
                <Select
                  fullWidth
                  labelId="fornecedor"
                  id="demo-simple-select"
                  value={fornecedor}
                  onChange={handleChange}
                >
                  {listFornecedor.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4}>

              <FormControl fullWidth>
                <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  onChange={handleChange}

                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={2}>
              <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleChange}

              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

            </Grid>
          </Grid>
          <div className="col-10">

          </div>

          <div className="col">
            {/* <SelectFornecedor
                  name='idFornecedor'
                  onChange={setForn}
                  disabled={disableInput}
                /> */}
          </div>
          <div className="col-2">
            {/* <DatePicker
                  name="dataEntrada"
                  showPopperArrow={true}

                  onChange={setNewTaskData}
                  dateFormat="dd/MM/yyyy"
                  value={newItem.dataEntrada}
                  className="form-control"
                  placeholder="Data da Entrega"
                  disabled={disableInput}
                /> */}
          </div>

          <div className="row">


            <div className="col-2">

            </div>
            <div className="col-5">
              <TextField
                id="standard-select-currency"
                select
                label="Material"
                value={newItem.material}
                onChange={handleSelect}
                helperText="Selecione o tipo de material"
              >
                {listMaterial.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

            </div>
            <div className="col-1">
              <TextField
                // id="standard-basic"
                type="number"
                label="Quantidade"
                name="quantity"
                onChange={handleChange}
                defaultValue={newItem.quantity}
              />
            </div>
            <div className="col-2">
              {/* <InputMoney
              required
              name="price"
              className="form-control"
              placeholder="R$ Unitário"
              onChange={setPrice}
              value={price}
            /> */}
            </div>
            <div className="col-2">
              <TextField
                disabled
                name="totalPrice"
                type="number"
                label="R$ Total"
                onChange={handleChange}
                defaultValue={Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(newItem.totalPrice)}
              />
            </div>

          </div>

          <Button variant="contained" color="primary" type="submit">
            Adicionar
        </Button>
        </form>
      </CardContent>
    </Card>

  )
};

export default CadastroProdutoPage;
