import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button,Badge, Group, List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import "./Drawer.css"
import { IconBasketFilled } from '@tabler/icons-react';
import { useState,useEffect } from 'react';

function DrawerComponent({ basketItems, count }) {
    const [opened, { open, close }] = useDisclosure(false);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let calculatedTotalPrice = 0; // Calculate total price within the effect
        basketItems.forEach(({ price, count }) => {
            calculatedTotalPrice += price * count;
        });
        setTotalPrice(calculatedTotalPrice);
    }, [basketItems]);


    return (
        <>
            <Drawer position="right" opened={opened} onClose={close} title="Basket Items" color='blue'>
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
                    {basketItems.map(({ name, price, count }, index) => (
                        <List.Item key={index}>
                            Product Name: {name} || Price: {price} | Count :<Badge  size="xl">{count}</Badge>
                        </List.Item>
                    ))}
                </List>
            </Drawer>

            <Group position="center">
                <Button onClick={open} className='DrawerBtn'> <IconBasketFilled></IconBasketFilled> Basket total Price:{totalPrice}</Button>
            </Group>
        </>
    );
}

export default DrawerComponent;
