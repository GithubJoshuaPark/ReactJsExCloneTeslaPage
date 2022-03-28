import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [isBurgerOpen, setBurgerOpen] = useState(false);

    function onCloseHandler(){
        console.log(`🍎 ~ file: Header.js ~ line 9 ~ onCloseHandler ~ isBurgerOpen: `, isBurgerOpen);
        setBurgerOpen(!isBurgerOpen);
    }

    return (
        <Container>
            <a href="https://tesla.com" target="_blank" rel="noreferrer">
            <img src="/images/logo.svg" alt=""/>
            </a>
            <Menu>
                <a href="https://tesla.com">Model S</a>
                <a href="https://tesla.com">Model 3</a>
                <a href="https://tesla.com">Model X</a>
                <a href="https://tesla.com">Model Y</a>
                <a href="https://tesla.com">Solar Roof</a>
                <a href="https://tesla.com">Solar Panels</a>
            </Menu>
            <RightMenu >
                <a href="https://tesla.com">SHOP</a>
                <a href="https://tesla.com">TESLA ACCOUNT</a>
                <CustomeMenu onClick={onCloseHandler} />
            </RightMenu>
            <BuregerNav show={isBurgerOpen}>
                <CloseWrapper>
                    <CustomeClose onClick={onCloseHandler}/>
                </CloseWrapper>
                
                <li><a href="https://tesla.com">Existing Inventory</a></li>
                <li><a href="https://tesla.com">Used Inventory</a></li>
                <li><a href="https://tesla.com">Trade-in</a></li>
                <li><a href="https://tesla.com">Cybertruck</a></li>
                <li><a href="https://tesla.com">Roadaster</a></li>
                <li><a href="https://tesla.com">Existing Inventory</a></li>
                <li><a href="https://tesla.com">Existing Inventory</a></li>
                <li><a href="https://tesla.com">Existing Inventory</a></li>
                <li><a href="https://tesla.com">Existing Inventory</a></li>
                <li><a href="https://tesla.com">Existing Inventory</a></li>
            </BuregerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 1
`
const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 0 10px;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 1040px) {
        display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`

const CustomeMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BuregerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    transform: ${props => props.show ? 'translateX(100%)' : 'translateX(0)'}; 
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);

        a {
            font-weight: 600;
        }
    }
`

const CustomeClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`