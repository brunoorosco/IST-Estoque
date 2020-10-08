import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FornecedoresPage from './fornecedoresPage';
import CadastroFornecedorPage from './cadastroFornecedorPage';
import Layout from '../../../containers/Layout';

//import { PERMISSOES } from '../../../res/enums';

export default function FornecedorModule() {

  return (

    <Switch>
      {/* <RouteAuthorize permissao={PERMISSOES.PRODUTOS.INCLUIR} exact path="/admin/produtos/novo" component={CadastroProdutoPage} />
        <RouteAuthorize permissao={PERMISSOES.PRODUTOS.ALTERAR} exact path="/admin/produtos/:id" component={CadastroProdutoPage} />
        <RouteAuthorize permissao={PERMISSOES.PRODUTOS.VISUALIZAR} path="/admin/produtos" component={ProdutosPage} /> */}

      <Route exact path="/fornecedores/novo" component={CadastroFornecedorPage} />
      <Route exact path="/fornecedores/:id" component={CadastroFornecedorPage} />
      <Route exact path="/fornecedores" component={FornecedoresPage} />
    </Switch>

  )
}