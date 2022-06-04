import { Accordion, AccordionDetails, AccordionSummary, Typography, makeStyles, Grid, Fade } from '@material-ui/core'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Skeleton } from '@mui/material';
import Card from './Card';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  accordion: {
    // margin:"5px",

    border: "1px solid",
    borderColor: props => props ? '#E6034B' : 'white',
    borderRadius: "10px",
    marginBottom: theme.spacing(2)

  },
  accordionSummary: {
    marginBottom: props => props ? "5px" : "0px",
    border: "2px solid black"
  },

}))

export default function Test(props) {

  const [open, setOpen] = useState(false);
  const classes = useStyles(open)
  const { product, categories } = props


  return (
    <div>
      {categories ? (
        <div className={classes.accordion} >
          {/* <Fade in={true} timeout={2000}> */}
          <Accordion TransitionProps={{ timeout: 750 }} elevation={0} className="m-2" sx={{ border: "none", borderRadius: 10, margin: "5px", }}>
            <AccordionSummary
              onClick={() => setOpen(!open)}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ border: "none", }}
              className="shadow"
              elevation={3}
            >
              <Typography>{categories.name}</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Grid container spacing={2} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                <Grid style={{ width: "100%" }} item >
                  {product.length ? product.map((item, index) => (
                      <Card product={item} />
                  )
                  ) : <h1>No products available</h1>}
                </Grid>
                {/* </Fade> */}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Skeleton variant="text" width={560} height={66} style={{ width: "100%", }} />
        </div>
      )}

      {/* </Fade> */}

    </div>
  )
}
