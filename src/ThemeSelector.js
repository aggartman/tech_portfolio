import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from 'lodash';
import {useTheme} from './theme/useTheme';
import { getFromLS } from './utils/storage';

const ThemedButton = styled.button`
    border: 1px solid black;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 5px;
    cursor: pointer;
`;

const Container = styled.ul`
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3rem;
    padding: 10px;
`;

const Header = styled.h2`
    display: flex;
    justify-content: space-around;
`;

export default (props) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
        updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = {...data, [key]:theme[key]};
        setData(updated);
    }

    const ThemeCard = props => {
        return(
                <ThemedButton onClick={ (theme) => themeSwitcher(props.theme) }
                              style={{backgroundColor: `${data[_.camelCase(props.theme.name)].colors.swatch}`}}>
                </ThemedButton>
        )
    }

    return (
        <div>
            <Container>
                {
                    themes.length > 0 &&
                    themes.map(theme =>(
                        <ThemeCard theme={data[theme]} key={data[theme].id} />
                    ))
                }
            </Container>
        </div>
    )
}