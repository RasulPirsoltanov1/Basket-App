import './App.css';
import { Container, Stack } from '@mantine/core';
import Card from './components/Card';
import { SimpleGrid, Button } from '@mantine/core';
import { useState } from 'react';
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { Input } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';


const storeItems = [
  {
    id: 1,
    name: "Iphone 11",
    price: 1200,
    description: "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
  },
  {
    id: 2,
    name: "Samsung S23",
    price: 2300,
    description: "wreg  fsdj sfbfj klsadsasd asdasda asd ndsm asb salfs sdlhf "
  },
  {
    id: 3,
    name: "Xiomi mi 12",
    price: 990,
    description: "asdasds adsadsadas d sdasdasd dasdasdasbjs nddsadm asasdasb salfssadsad  dasdasdsdlhf "
  }
];




function App() {

  const [basketItems, setBasketItems] = useState([]);
  let [search, setSearch] = useState("");

  let filteredItems = basketItems.filter(({ name}, index) => {
    return name.indexOf(search) >= 0;
  });

  const AddBasket = (index) => {
    setBasketItems([...basketItems, storeItems.filter(({ id }, i) => {
      return id === index;
    })[0]]);
  }
  return (
    <Container>
      <SimpleGrid cols={3} className='Store'>
        {
          storeItems.map(({ name, price, description, id }, i) => {
            return (<Card key={"cardKey" + i} name={name} price={price} description={description} onAdd={() => AddBasket(id)}></Card>);
          })
        }
      </SimpleGrid>
      <br></br>
      <Input
        icon={<IconAt />}
        placeholder="Search..."
        radius="xl"
        size="md"
        onChange={(e) => setSearch(e.target.value)}
      />
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
          filteredItems.map(({ name, price }) => {
            console.log(name + price);
            return <List.Item>Product Name: {name} ||   Price: {price}</List.Item>
          })
        }
      </List>
    </Container>

  );
}

export default App;
