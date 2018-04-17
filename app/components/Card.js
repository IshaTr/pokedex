// @flow
import React from "react";
import axios from "axios";
import styled from "styled-components";

import { colorType } from "../constants";

type Props = {
    data: Object,
    showPokemon: boolean,
    layout: string,
};

type State = {
    pokemon: ?Object,
};

const Tag = styled.div`
    display: flex;
    align-items: flex-start;
    font-weight: 600;
    font-size: 13px;
`;

const Title = styled.div`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    margin-right: ${props => (props.layout === "grid" ? "0px" : "6px")};
`;

const PokemonCardWrapper = styled.div`
    transition: 0.5s all ease-in-out;
    width: ${props => (props.layout === "grid" ? "208px" : "480px")};
    height: ${props => (props.layout === "grid" ? "208px" : "90px")};
    text-align: center;
    color: #fff;
    padding: 15px;
    margin-bottom: 16px;
    background: #e2e2e2;
    border-radius: 6px;
    display: ${props => (props.layout === "grid" ? "block" : "flex")};
    align-items: center;
    justify-content: space-between;

    &:hover {
        cursor: pointer;
        transform: perspective(500px) translate3d(0, 0, 8px);
        box-shadow: 2px 2px 4px 0px #e2e2e2;
    }

    @media only screen and (max-width: 1024px) {
        width: ${props => (props.layout === "grid" ? "208px" : "800px")};
    }

    @media only screen and (max-width: 450px) {
        width: 208px;
        height: 208px;
    }
`;

const Attributes = styled.span`
    text-transform: capitalize;
    font-size: 12px;
    font-weight: 400;
    margin-right: ${props => (props.layout === "grid" ? "0px" : "6px")};
    margin-bottom: ${props => (props.layout === "grid" ? "8px" : "0px")};
`;

class Card extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            pokemon: null
        };
    }

    state: State;

    componentDidMount() {
        axios.get(this.props.data.url)
            .then((response) => {
                this.setState({
                    pokemon: response.data
                });
            });
    }

    render() {
        const { pokemon } = this.state;
        const { showPokemon, layout } = this.props;
        if (pokemon && showPokemon) {
            const types = pokemon.types.map(pokemonType => pokemonType.type.name || []);
            const abilities = pokemon && pokemon.abilities.map(item => item.ability.name);
            return (
                <PokemonCardWrapper style={colorType[types[0]]} layout={layout}>
                    <Tag>
                        # {pokemon.order}
                    </Tag>
                    <div>
                        <img
                            src={pokemon.sprites.front_default}
                            alt=""
                            width={layout === "grid" ? "120px" : "90px"}
                            height={layout === "grid" ? "120px" : "90px"}
                        />
                    </div>
                    <Title>
                        {pokemon.name}
                    </Title>
                    <Attributes>
                        {types.join(", ")}
                    </Attributes>
                    <br />
                    <Attributes>
                        {abilities.join(", ")}
                    </Attributes>
                </PokemonCardWrapper>
            );
        }
        return null;
    }
}

export default Card;
