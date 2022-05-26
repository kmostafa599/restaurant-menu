import React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import Menu from './Menu';
import Test from './Test';


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Navigation = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const categories = [
    {
      id: 1,
      name: "Pizza",
      photo: "https://media.istockphoto.com/photos/full-table-of-italian-meals-on-plates-pizza-pasta-ravioli-carpaccio-picture-id1227415751?k=20&m=1227415751&s=170667a&w=0&h=jSWQmXeJbgjpMPbC141v52dN0TATyhHGG20qrgvW1OE=",
      price: "30$",
    },
    {
      id: 2,
      name: "sushi",
      photo: "https://finedine.imgix.net/X0qgORHkY/e952ac6f-c7ae-4a93-9615-d44d1e061d04.jpg?auto=format,&fit=crop&w=90&h=60",
      price: "30$",
    },
    {
      id: 3,
      name: "whatever",
      photo: "https://finedine.imgix.net/X0qgORHkY/e4958c1b-2275-421f-ad43-5ef4df76f6ba.jpg?auto=format,&fit=crop&w=90&h=60",
      price: "30$",
    },
  ];
  const products = [
    {

      category_id: 1,
      name: null,
      photo: "https://media.istockphoto.com/photos/full-table-of-italian-meals-on-plates-pizza-pasta-ravioli-carpaccio-picture-id1227415751?k=20&m=1227415751&s=170667a&w=0&h=jSWQmXeJbgjpMPbC141v52dN0TATyhHGG20qrgvW1OE=",
      price: "30$",

    },
    {
      category_id: 2,
      name: "Pepsi",
      photo: "https://media.istockphoto.com/photos/full-table-of-italian-meals-on-plates-pizza-pasta-ravioli-carpaccio-picture-id1227415751?k=20&m=1227415751&s=170667a&w=0&h=jSWQmXeJbgjpMPbC141v52dN0TATyhHGG20qrgvW1OE=",
      price: "40$",

    },
    {
      category_id: 2,
      name: "Cola",
      photo: "https://media.istockphoto.com/photos/full-table-of-italian-meals-on-plates-pizza-pasta-ravioli-carpaccio-picture-id1227415751?k=20&m=1227415751&s=170667a&w=0&h=jSWQmXeJbgjpMPbC141v52dN0TATyhHGG20qrgvW1OE=",
      price: "10$",

    },
  ]


  return (
    <div ref={ref} {...props}>

      <Box className="mt-2 mb-2 h-1/2" sx={{ width: '100%', }}>
        <Box sx={{ width: "100%", borderColor: 'divider' }}>
          <Tabs TransitionProps={{ timeout: 3000 }} className="" textColor="" style={{ color: "#e6034b" }} TabIndicatorProps={{ style: { transitionDuration: '1000', backgroundColor: "#e6034b" } }} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto yabs example" value={value} onChange={handleChange} >
            {categories.map((data, index) => (
              <Tab className='p-2 text-2xl'icon={<Avatar className='mb-3' sx={{ width: '175px', height: '100px', borderRadius: '5%', }} src={data.photo} />} label={data.name} {...a11yProps(0)} />
            ))}
          </Tabs>
        </Box>

        {categories.map((data, index) => {
          let product = products.filter((product) => product.category_id === data.id);
          console.log(product)
          return (
            <TabPanel spacing={2} value={value} index={index}>
              <Test categories={data} product={product} />
            </TabPanel>
          )
        }
        )}
      </Box>


    </div>
  )
})
export default Navigation;