import React from 'react'
import SideMenu from '../../components/Sidebar'
//import MainContent from '../../components/Main'
import Header from '../../components/Header'
import styled from 'styled-components'


const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;


const MainContent = styled.div`
  flex: 1;
  background-color: #f9f9f9;
`;




function Layout({ children }) {
    return (
        <Container>
            <Header />
            <div style={{ flex: 1, display: "flex" }}>
                <SideMenu />
                <MainContent >{children}</MainContent>
            </div>
        </Container>
    )
}

export default Layout
