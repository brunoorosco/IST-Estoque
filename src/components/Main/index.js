import React from 'react'
import styled from 'styled-components'
import Deposits from './Deposits'
import Nav from './Nav'
import NewDepositBtn from './NewDepositBtn'
import depositData from '../../DepositData.json'

const Container = styled.div`
    width: auto;
   
    position: relative;
    padding: 0 4rem;
`

function Main () {
   
        return (
            <Container>
            
                <NewDepositBtn />
                <Deposits title="Imoveis Ativos" count={2} data={depositData.active} />
                <Deposits title="Imoveis Fechados" count={8} data={depositData.closed}/>
            </Container>
        )
    
}

export default Main
