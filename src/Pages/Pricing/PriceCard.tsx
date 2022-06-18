import { Badge, Button, Card, Group, Image, List, Stack, Text, ThemeIcon, Title, useMantineTheme } from "@mantine/core";
import { CalendarStats, CircleCheck, CircleDashed, Download, Rocket, Seeding } from "tabler-icons-react";

import React from "react";

interface IncluedItem {
    icon: React.ReactNode;
    text: string;
}

interface Props {
    titleIcon: React.ReactNode;
    title: string;
    subTitle: string;
    price: string;
    buttonText: string;
    includedItems: IncluedItem[];
}

export default function PriceCard({ titleIcon, title, subTitle, price, buttonText, includedItems }: Props) {
    return (
        <Card shadow="sm" p="lg" style={{ width: 340, padding: "60px 30px" }}>
            <Stack>
                <Card.Section>
                    <Group>
                        {titleIcon}
                        <Text size={"xl"}>{title}</Text>
                    </Group>
                    <Text>{subTitle}</Text>
                </Card.Section>

                <Group>
                    <Title>${price}</Title>
                    <Text>/month</Text>
                </Group>

                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                    {buttonText}
                </Button>

                <Text weight={500}>Includes</Text>

                <List spacing="xs" size="sm" center>
                    {includedItems.map((item: IncluedItem) => (
                        <List.Item
                            icon={
                                <ThemeIcon color="teal" size={24} radius="xl">
                                    {item.icon}
                                </ThemeIcon>
                            }
                        >
                            {item.text}
                        </List.Item>
                    ))}
                </List>
            </Stack>
        </Card>
    );
}
