import React from 'react';
import { Container, ContentSection } from './styles';
import { useLocation } from 'react-router-dom';


const Content = ({ children }) => {
    const location = useLocation();

    React.useEffect(() => {
        document.getElementById("ContentContainer").scrollTo(0, 0)
    }, [location])

    return (
        <Container id='ContentContainer'>
            <ContentSection>
                {children}
            </ContentSection>
        </Container>
    );
}

export default Content;