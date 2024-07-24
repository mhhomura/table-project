import React from 'react';
import { Grid, } from './styles';
import Content from '../Content';

const Layout = ({ children }) => {

    return (
        <Grid>
            <Content>
                {children}
            </Content>
        </Grid>
    );
}

export default Layout;