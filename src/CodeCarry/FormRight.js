import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';
import axios from 'axios'


const useStyle = makeStyles(theme => ({
    span:{
        color: '#00A0A6'
    },
    formControl:{
    width: "100%",
    fontSize:" 1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#212529",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da"
    },
    btn: {
        float: 'left',
        '& > *': {
          margin: theme.spacing(0.25),
        },
      },
}))
function FormRight() {
    const classes = useStyle();
    const [user, setUser] = React.useState({
        description: ''
    })
    
    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value});
    }

    function handleClick(event){
      event.preventDefault();
      const newForm = {
        description: user.description
      }
      axios.post('http://localhost:3001/create', newForm)
    }
    return (
        <React.Fragment>
            <div className={classes.formGroup}>
            <Typography gutterBottom>Character Count: <span className={classes.span}> 0 </span>|
                Words Count: <span  className={classes.span}>0</span> | Line Count: <span  className={classes.span}>0</span></Typography>
                <TextareaAutosize name="description" className={classes.formControl} aria-label="minimum height" minRows={10} placeholder="Type or Past your Content here..."  value={user.description} onChange={handleInputs} />
                <div className={classes.btn}>
                    <Button type="submit" variant="contained" color="secondary" onClick={handleClick}>lower case</Button>
                    <Button type="button" variant="contained" color="secondary">UPPAR CASE</Button>
                    <Button type="button" variant="contained" color="secondary">aLtErNaTiNg cAsE</Button>
                    <Button type="button" variant="contained" color="secondary">Capitalized Case</Button>
                    <Button type="button" variant="contained" color="secondary">Sentence case</Button>
                    <Button type="button" variant="contained" color="secondary">hyphn-case</Button>
                    <Button type="button" variant="contained" color="secondary">Reverse Case</Button>
                    <Button type="button" variant="contained" color="secondary">underscore_case</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormRight
