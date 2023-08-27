import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import "./Card.css"

const CustomCard = ({name,img,price,description,onAdd}) => {



    return (<Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
            <Image
                src={`/assets/images/${img}.jpg`}
                height={260}
                alt="Norway"
                className='ProductImg'
            />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{name}</Text>
            <Badge color="blue" variant="light">
                {price} Azn
            </Badge>
        </Group>

        <Text size="sm" color="dimmed">
            {description}
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md" className='CardButton' onClick={onAdd}>
            Book classic tour now
        </Button>
    </Card>)
}



export default CustomCard;