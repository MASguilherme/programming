import { createUseStyles } from "react-jss";

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

export const Dashboard = () => {

    const classes = useClasses();
  return (
    <div>
      <h1 className={classes.paragraph}>Dashboard</h1>
    </div>
  );
};
