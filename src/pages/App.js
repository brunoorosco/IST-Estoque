import React from 'react';
import {
  ProdutosModule,
  SemPermissaoModule,
  FornecedorModule
} from "./Private";
import { LoginModule } from "./Public";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import DashModule from '../components/Main'
import Layout from '../containers/Layout';
// import { ConfirmProvider } from './pages/Private/ProductIn/node_modules/material-ui-confirm';
//import ContextProvider from './context';

function App() {
  return (

    <BrowserRouter>
      {/* <ContextProvider> */}
      {/* <ConfirmProvider> */}
      {/* <SnackbarProvider maxSnack={3}> */}

      <Switch>
        <Route path="/login" component={LoginModule} />

        <Layout>
          <Route path="/app" component={DashModule} />
          <Route path="/produtos" component={ProdutosModule} />
          <Route path="/fornecedores" component={FornecedorModule} />
          <Route path="/sem-permissao" component={SemPermissaoModule} />
        </Layout>
      </Switch>

      {/* </SnackbarProvider> */}
      {/* </ConfirmProvider> */}
      {/* </ContextProvider> */}
    </BrowserRouter>


  );
}

export default App;
