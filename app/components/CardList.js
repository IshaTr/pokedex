// @flow
import React from "react";
import axios from "axios";
import styled from "styled-components";
import Select from "react-select";

import { pokemonType } from "../constants";
import Card from "./Card";
import NavBar from "./NavBar";

const CardListWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1024px;
    width: 100%;
    margin: 32px auto;

    @media only screen and (max-width: 1024px) {
        width: 74%;
    }

    @media only screen and (max-width: 768px) {
        width: 65%;
    }

    @media only screen and (max-width: 420px) and (min-width: 380px) {
        margin: 32px 84px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
`;

const Button = styled.button`
    padding: 12px 16px;
    transition: 0.5s all ease-in-out;
    background: #424242;
    border: 1px solid #424242;
    color: #fff;
    border-radius: 4px;
    margin-right: 15px;
    cursor: pointer;
    font-size: 14px;
    width: 100px;
    outline: none;

    &:focus, &:hover {
        outline: none;
        background: #fff;
        color: #424242;
    }
`;

const ButtonTable = Button.extend`
    @media only screen and (max-width: 450px) {
        display: none;
    }
`;

const ButtonFilterContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
`;

const Attributes = styled.div`
    width: 23%;
    margin-right: 15px;

    @media only screen and (max-width: 768px) {
        width: 30%;
    }

    @media only screen and (max-width: 420px) and (min-width: 380px) {
        margin: 40px 16px;
    }
`;

type Props = {};

type State = {
    pokemonData: Array<Object>,
    next: ?string,
    previous: ?string,
    search: string,
    selectedType: ?Object,
    initialPokemonData: Array<Object>,
    layout: string,
};

class CardList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            pokemonData: [],
            initialPokemonData: [],
            next: null,
            previous: null,
            search: "",
            selectedType: { value: "", label: "" },
            layout: "grid"
        };
    }

    state: State;

    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => {
                this.setState({
                    pokemonData: response.data.results,
                    initialPokemonData: response.data.result,
                    next: response.data.next,
                    previous: response.data.previous
                });
            });
    }

    getPokemon = () => {
        const { pokemonData, search, layout } = this.state;
        if (pokemonData.length) {
            return pokemonData.map(pokemon =>
                (<Card
                    layout={layout}
                    data={pokemon}
                    key={pokemon.name}
                    showPokemon={search ? pokemon.name.toLowerCase().search(search.toLowerCase()) !== -1 : true}
                />));
        }
        return null;
    }

    navigatePage = (url: string) => {
        axios.get(url)
            .then((response) => {
                this.setState({
                    pokemonData: response.data.results,
                    next: response.data.next,
                    previous: response.data.previous
                });
            });
    }

    handleSearch = (value: string) => {
        this.setState({
            search: value
        });
    }

    handleSelectedType = (val: {value: ?string, label: ?string}) => {
        if (val) {
            this.setState({ selectedType: val });

            axios.get(val.value)
                .then((response) => {
                    const newPokemonData = response.data.pokemon.map( item => item.pokemon);
                    this.setState({
                        next: null,
                        previous: null,
                        pokemonData: newPokemonData
                    });
                });
        } else {
            this.setState({
                selectedType: { value: "", label: "" },
                pokemonData: this.state.initialPokemonData
            });
        }
    }

    changeLayout = (layout: string) => {
        this.setState({
            layout
        });
    }

    render() {
        const {
            pokemonData, previous, next, search
        } = this.state;

        if (pokemonData.length) {
            return (
                <div>
                    <NavBar search={search} handleSearch={this.handleSearch} />
                    <ButtonFilterContainer>
                        <Attributes>
                            <Select
                                name="pokemon-types"
                                value={this.state.selectedType}
                                options={pokemonType}
                                onChange={this.handleSelectedType}
                                clearable={false}
                            />
                        </Attributes>
                        <Attributes>
                            <ButtonTable onClick={() => this.changeLayout("list")}>
                                Table
                            </ButtonTable>
                            <Button onClick={() => this.changeLayout("grid")}>
                                Grid
                            </Button>
                        </Attributes>
                    </ButtonFilterContainer>
                    <CardListWrapper>
                        {this.getPokemon()}
                    </CardListWrapper>
                    {
                        pokemonData &&
                        <ButtonContainer>
                            {
                                previous &&
                                <Button onClick={() => this.navigatePage(previous)}>Previous</Button>
                            }
                            {
                                next &&
                                <Button onClick={() => this.navigatePage(next)}>Next</Button>
                            }
                        </ButtonContainer>
                    }
                </div>
            );
        }
        return null;
    }
}

export default CardList;

