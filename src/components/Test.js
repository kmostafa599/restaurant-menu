import { Accordion, AccordionDetails, AccordionSummary, Typography, makeStyles, Grid, Fade } from '@material-ui/core'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ItemCard from './ItemCard';
import Box from '@mui/material/Box';
import { Skeleton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Card from './Card';


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
  const [Fade, setFade] = useState(true)
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
              {/* <Typography  >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography> */}
              <Grid container spacing={2} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                {/* <Grid item >
            <Card className={classes.card} elevation={5} sx={{display:"flex",flexDirection:"row",left:"50%",margin:"0px",padding:"0px", maxWidth: 200 }}>
        
                
                <CardContent>
                       
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                        
                </CardActions>
                <CardMedia
                className="m-2 rounded" style={{marginRight:"5px"}}
                        component="img"
                        height="194"
                        image="https://mui.com//static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />
                
            </Card>

        </Grid> */}
                {/* <ItemCard /> */}
                {/* <Fade in={true} timeout={5000}> */}

                <Grid style={{ width: "100%" }} item >
                  {product.length ? product.map((data, index) => (
                    // <ItemCard itemName={data.name} itemPrice={data.price} itemImage={data.photo}/>)

                    // <Card className={classes.card} sx={{ width: "100%", display: 'flex' }}>
                    //   <Box sx={{ display: 'flex', }}>
                    //     <CardMedia
                    //       component="img"
                    //       sx={{ width: 151 }}
                    //       image={data.image}
                    //       // itemImage
                    //       alt="Product Image"
                    //     />
                    //     <CardContent sx={{ flex: '0 1 auto' }}>
                    //       <Typography component="div" variant="h5">
                    //         {data.name}
                    //       </Typography>
                    //       <Typography variant="subtitle1" color="text.secondary" component="div">
                    //         {data.price}
                    //         {/* itemPrice */}
                    //         <AddIcon style={{ position: "absolute", bottom: "0px", right: "0px" }} />

                    //       </Typography>

                    //     </CardContent>

                    //     <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    //     </Box>
                    //   </Box>

                    // </Card>
                    <Card/>

                    )
                  ) : <h1>No products available</h1>}
                </Grid>
                {/* </Fade> */}

              </Grid>


            </AccordionDetails>

          </Accordion>

        </div>) : (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Skeleton variant="text" width={560} height={66} style={{ width: "100%", }} />
        </div>
      )

      }

      {/* </Fade> */}

    </div>
  )
}
