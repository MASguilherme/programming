import { createUseStyles } from "react-jss";

import styled from 'styled-components';

const useClasses = createUseStyles({
    paragraph: {
        backgroundColor: 'black',
        color: 'white',
        '&:hover':{
            backgroundColor: 'white',
            color: 'black'
        }

    }
});

const Paragraph = styled.p`
    background-color: orange;
    color: red;
    font-size: 3rem;

    :hover{
        background-color: black;
    }
`;    

export const Dashboard = () => {

    const classes = useClasses();
  return (
    <div>
      <h1 className={classes.paragraph}>Dashboard</h1>
      <Paragraph>Teste</Paragraph>
    </div>
  );
};
