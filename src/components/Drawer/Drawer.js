import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group, List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import "./Drawer.css"

function DrawerComponent({ basketItems,count }) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer className='Drawer' position="right" opened={opened} onClose={close} title="Basket Items" color='blue'>
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
                    {basketItems.map(({ name, price }, index) => (
                        <List.Item key={index}>
                            Product Name: {name} || Price: {price}
                        </List.Item>
                    ))}
                </List>
            </Drawer>

            <Group position="center">
                <Button onClick={open} className='DrawerBtn'>View {count} Basket Items</Button>
            </Group>
        </>
    );
}

export default DrawerComponent;
