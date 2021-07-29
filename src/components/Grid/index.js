import React from 'react';
import PropTypes from "prop-types";


// Styles
import { Wr, Content } from './Grid.styles'

const Grid = ({ header, children }) => (
    <Wr>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wr>
);

Grid.propTypes = { 
    header: PropTypes.string
}

export default Grid;












