import { AppShell, useMantineTheme, Navbar, ScrollArea } from "@mantine/core";
import PlaylistList from "../components/Nav/PlaylistList";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import EditWindow from "./Editor/EditWindow";
import NavHeader from "./Nav/NavHeader";
import UserBox from "./Nav/UserBox";
import Player from "./Player/Player";

export default function Editor() {
	const { data: session, status } = useSession();
	const theme = useMantineTheme();

	return (
		<AppShell
			margin={0}
			padding={0}
			navbar={
				<Navbar width={{ base: 300 }} p="md" style={{ color: "white" }}>
					<Navbar.Section>
						<NavHeader />
					</Navbar.Section>
					<Navbar.Section grow my="lg" component={ScrollArea}>
						<PlaylistList />
					</Navbar.Section>
					<Navbar.Section>
						<UserBox />
					</Navbar.Section>
				</Navbar>
			}
			sx={{
				overflow: "hidden",
				height: "100vh",
				background: theme.colors.dark[5],
			}}>
			<EditWindow />
			<Player />
		</AppShell>
	);
}
