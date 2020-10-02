import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProdutosPage from './produtosPage';
import CadastroProdutoPage from './cadastroProdutoPage';
import Layout from '../../../containers/Layout';

//import { PERMISSOES } from '../../../res/enums';

export default function ProdutosModule() {

  return (

    <Switch>
      {/* <RouteAuthorize permissao={PERMISSOES.PRODUTOS.INCLUIR} exact path="/admin/produtos/novo" component={CadastroProdutoPage} />
        <RouteAuthorize permissao={PERMISSOES.PRODUTOS.ALTERAR} exact path="/admin/produtos/:id" component={CadastroProdutoPage} />
        <RouteAuthorize permissao={PERMISSOES.PRODUTOS.VISUALIZAR} path="/admin/produtos" component={ProdutosPage} /> */}

      <Route exact path="/produtos/novo" component={CadastroProdutoPage} />
      <Route exact path="/produtos/:id" component={CadastroProdutoPage} />
      <Route exact path="/produtos" component={ProdutosPage} />
    </Switch>

  )
}