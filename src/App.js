import './App.css';
import { Container, Stack } from '@mantine/core';
import Card from './components/Card';
import { SimpleGrid, Button } from '@mantine/core';
import { useState } from 'react';
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { Input } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
const storeItems = [
  {
    id: 1,
    img: "iphone11",
    name: "Iphone 11",
    price: 1200,
    description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
  },
  {
    id: 2,
    name: "Samsung S23",
    img: "samsungs23",
    price: 2300,
    description: "wreg  fsdj sfbfj klsadsasd asdasda asd ndsm asb salfs sdlhf "
  },
  {
    id: 3,
    name: "Xiomi mi 12",
    img: "xiomimi12",
    price: 990,
    description: "asdasds adsadsadas d sdasdasd dasdasdasbjs nddsadm asasdasb salfssadsad  dasdasdsdlhf "
  },
  {
    id: 23,
    name: "Motorola X5",
    img: "motorolax5",
    price: 990,
    description: "asdasds adsadsadas d sdasdasd dasdasdasbjs nddsadm asasdasb salfssadsad  dasdasdsdlhf "
  },
  {
    id: 32,
    name: "Oneplus 10T",
    img: "oneplus10t",
    price: 990,
    description: "asdasds adsadsadas d sdasdasd dasdasdasbjs nddsadm asasdasb salfssadsad  dasdasdsdlhf "
  }
];




function App() {

  const [basketItems, setBasketItems] = useState([]);
  let [search, setSearch] = useState("");

  let filteredItems = storeItems.filter(({ name }, index) => {
    return name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0;
  });

  const AddBasket = (index) => {
    setBasketItems([...basketItems, storeItems.filter(({ id }, i) => {
      return id === index;
    })[0]]);
  }
  return (
    <Container>
      <div className='SearchBar'>
        <Input
          icon={ <IconSearch/>}
          placeholder="Search..."
          radius="xl"
          size="md"
          onChange={(e) => setSearch(e.target.value)}
          className='search'
          value={search}
        />
        <Button color='blue' onClick={()=>setSearch("")}>Clear</Button>
      </div>
      <SimpleGrid cols={3} className='Store'>
        {
          filteredItems.map(({ name, price, description, id, img }, i) => {
            return (<Card key={"cardKey" + i} name={name} img={img} price={price} description={description} onAdd={() => AddBasket(id)}></Card>);
          })
        }
      </SimpleGrid>
      <br></br>
      <br></br>
      <h2>Basket</h2>
      <List
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size="1rem" />
          </ThemeIcon>
        }
        className='Basket'
      >
        {
          basketItems.map(({ name, price }) => {
            console.log(name + price);
            return <List.Item>Product Name: {name} ||   Price: {price}</List.Item>
          })
        }
      </List>
    </Container>

  );
}

export default App;
