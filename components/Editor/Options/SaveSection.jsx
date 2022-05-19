import { Button, useMantineTheme } from "@mantine/core";
import toast from "react-hot-toast";
import { Checklist } from "tabler-icons-react";
import useStore from "../../../lib/store";
import useSpotify from "../../../lib/useSpotify";
import EditOptionsSection from "./EditOptionsSection";

function SaveSection() {
	const theme = useMantineTheme();
	const currentPlaylist = useStore(state => state.currentPlaylist);
	const currentTracks = useStore(state => state.currentTracks);
	const primaryColor = theme.primaryColor;
	const s = useSpotify();

	const handleSave = () => {
		console.log(currentPlaylist);
		const trackUris = currentTracks.map(t => t.track.uri);
		s.replaceTracksInPlaylist(currentPlaylist.id, trackUris).then(res => {
			console.log(res);
			if (res.statusCode === 200 || 201) {
				toast.success("Saved tracks");
			}
		});
	};

	return (
		<EditOptionsSection
			title="Save"
			text="Save the new playlist"
			icon={<Checklist size={40} color={theme.colors[primaryColor][5]} />}>
			<Button onClick={() => handleSave()} variant="outline">
				Save
			</Button>
		</EditOptionsSection>
	);
}

export default SaveSection;
