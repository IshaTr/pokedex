// @flow
import React from "react";
import styled from "styled-components";

const Header = styled.div`
    height: 70px;
    background: #F44336;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    padding-left: 24px;
`;

const Input = styled.input`
    text-align: left;
    font-size: 16px;
    transition: 0.3s all ease-in-out;
    background-color: rgb(255,255,255);
    color: rgb(78,77,77);
    border-radius: 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(189,196,196);
    border-image: initial;
    padding: 12px;
    margin-right: 24px;
    outline: none;
    display: block;
    width: 473px;
    margin-left: 257px;

    @media all and (max-width: 1024px) {
        margin-left: 137px;
        width: 400px;
    }

    @media all and (max-width: 768px) {
        margin-left: 80px;
        width: 300px;
    }

    @media all and (max-width: 482px) {
        display: none;
    }
`;

type Props = {
    search: string,
    handleSearch: Function,
};

const NavBar = (props: Props) => (
    <Header>
        <Title>Pokédex</Title>
        <Input
            type="text"
            name="search"
            placeholder="Type to search"
            value={props.search}
            onChange={e => props.handleSearch(e.target.value)}
        />
    </Header>
);

export default NavBar;
