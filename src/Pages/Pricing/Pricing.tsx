import { Badge, Button, Card, Group, Image, List, Stack, Text, ThemeIcon, Title, useMantineTheme } from "@mantine/core";
import { CalendarStats, CircleCheck, CircleDashed, Download, Rocket, Seeding } from "tabler-icons-react";

import PriceCard from "./PriceCard";
import React from "react";

interface Props {}

export default function Pricing(props: Props) {
    const theme = useMantineTheme();
    return (
        <>
            <Group>
                <PriceCard
                    titleIcon={<Seeding />}
                    title="Basic"
                    subTitle="For small teams"
                    price="11"
                    buttonText="Sign Up"
                    includedItems={[
                        { icon: <CalendarStats size={16} />, text: "Run on a schedule" },
                        { icon: <Download size={16} />, text: "Install R packages" },
                        { icon: <CircleDashed size={16} />, text: "3 hours processing time" },
                    ]}
                />
                <PriceCard
                    titleIcon={<Rocket />}
                    title="Pro"
                    subTitle="For large teams"
                    price="99"
                    buttonText="Sign Up"
                    includedItems={[
                        { icon: <CalendarStats size={16} />, text: "Run on a schedule" },
                        { icon: <Download size={16} />, text: "Install R packages" },
                        { icon: <CircleDashed size={16} />, text: "3 hours processing time" },
                    ]}
                />

                {/* <Card shadow="sm" p="lg" style={{ width: 340, margin: "auto" }}>
                    <Card.Section>
                        <Group>
                            <Rocket />
                            <Text
                                component="span"
                                align="center"
                                variant="gradient"
                                gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                                size="xl"
                                weight={700}
                                style={{ fontFamily: "Greycliff CF, sans-serif" }}
                            >
                                Pro
                            </Text>
                        </Group>
                    </Card.Section>

                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Badge color="pink" variant="light">
                            On Sale
                        </Badge>
                    </Group>

                    <Text size="sm" style={{ color: "teal", lineHeight: 1.5 }}>
                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the
                        fjords of Norway
                    </Text>

                    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                        Book classic tour now
                    </Button>
                </Card> */}
            </Group>
        </>
    );
}
