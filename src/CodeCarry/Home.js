import React from 'react';
import FormRight from './FormRight';
import TableRight from './TableRight';
import { Grid, makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Background from '../assets/hero-bg.png'

const useStyle = makeStyles(theme => ({
    container:{
        height: '85vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'center',
        backgroundPosition:" top center",
        [theme.breakpoints.down('sm')]:{
            marginTop: '7rem',
        }
      },
      formInput:{
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]:{
            justifyContent: 'center',
            marginBottom: '1rem'
        }
    },
    formControl:{
    width: '60%',
    padding: ".375rem .75rem",
    fontSize: "1rem",
    fontweight: 400,
    lineHeight: 1.5,
    color: "#212529",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
    marginRight: '0.25rem',
    },
}))
function Home() {
    const classes = useStyle()
    return (
        <div className={classes.container}>
 <div>
            <Grid container justify='space-evenly'>
                <Grid item sm={5} xs={12}>
                    <FormRight/>
                </Grid>
                <Grid item sm={5} xs={12} style={{marginTop: '1.35rem'}}>
                    <TableRight/> 
                </Grid>
            </Grid>
            <div style={{marginTop: '2rem'}}>
                <Buttons/>
            </div>
        </div>
        </div>
       
    )
}

function Buttons(){
    const classes = useStyle();
    return(
        <React.Fragment>
            <Grid container justify='space-evenly'>
                    <Grid item sm={5} xs={12}>
                        <div className={classes.formInput}>
                            <input type="text" className={classes.formControl} placeholder="Replace content"/>
                            <Button type="button" variant="contained" color="secondary">Find</Button>
                        </div>
                 
                    </Grid>

                    <Grid item sm={5} xs={12}>
                        <div style={{textAlign: 'center'}}>
                            <input type="text" className={classes.formControl} placeholder="Recipient's username"/>
                        <Button type="button" variant="contained" color="secondary">Replace</Button>
                        </div>
                    </Grid>
                </Grid>
        </React.Fragment>
    )
}
export default Home
