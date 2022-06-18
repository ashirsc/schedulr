import {
    ActionIcon,
    Anchor,
    AppShell,
    Aside,
    Burger,
    Button,
    Footer,
    Group,
    Header,
    Image,
    MediaQuery,
    Navbar,
    Stack,
    Text,
    useMantineTheme,
} from "@mantine/core";
import { Moon, Sun } from "tabler-icons-react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AppTheme } from "./App.context";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing/Pricing";
import Product from "./Pages/Product";

function App() {
    const theme = useMantineTheme();
    const { setTheme } = useContext(AppTheme);
    const navigate = useNavigate();
    const [opened, setOpened] = useState(false);

    function renderNavContent() {
        return (
            <>
                <Anchor onClick={() => navigate("/product")}>Product</Anchor>
                <Anchor onClick={() => navigate("/pricing")}>Pricing</Anchor>
                <Anchor onClick={() => navigate("/contact")}>Contact</Anchor>
            </>
        );
    }

    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                        <Stack>{renderNavContent()}</Stack>
                    </Navbar>
                </MediaQuery>
            }
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header height={70} p="md">
                    <Group style={{ display: "flex", alignItems: "center", height: "100%" }}>
                        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                            <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={theme.colors.gray[6]} mr="xl" />
                        </MediaQuery>

                        <Image
                            onClick={() => navigate("/")}
                            width={50}
                            height={40}
                            alt="Logo"
                            withPlaceholder
                            style={{ marginRight: "10px" }}
                        />
                        <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
                            <Group>{renderNavContent()}</Group>
                        </MediaQuery>
                        <Group style={{ marginLeft: "auto" }}>
                            <Button variant="subtle">Log in</Button>
                            <Button variant="filled">Get started</Button>
                            <ActionIcon
                                variant="default"
                                onClick={() => {
                                    if (theme.colorScheme === "dark") {
                                        setTheme({ colorScheme: "light" });
                                    } else {
                                        setTheme({ colorScheme: "dark" });
                                    }
                                }}
                            >
                                {theme.colorScheme == "dark" ? <Sun size={16} /> : <Moon size={16} />}
                            </ActionIcon>
                        </Group>
                    </Group>
                </Header>
            }
        >
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/product" element={<Product />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AppShell>
    );
}

export default App;
