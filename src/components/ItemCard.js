import React from 'react'
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme =>({ 
  card:{      
      borderRadius:"10px",
      marginBottom:theme.spacing(2)
     
  },
}))
 const ItemCard = React.forwardRef((props, ref) =>{
    const classes = useStyles();    
    const {itemName, itemImage, itemPrice}= props;
  return (
<div style={{width:"100%"}} ref={ref} {...props}>
          <Card className={classes.card} sx={{width:"100%", display: 'flex' }}>
      <Box sx={{ display: 'flex',  }}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={itemImage}
        // itemImage
        alt="Product Image"
      />
        <CardContent sx={{ flex: '0 1 auto' }}>
          <Typography component="div" variant="h5">
            {itemName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {itemPrice}
            {/* itemPrice */}
            <AddIcon style={{position:"absolute",bottom:"0px", right:"0px"}} />

          </Typography>

        </CardContent>

        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
      
    </Card>
    </div>
  )
})
export default ItemCard;