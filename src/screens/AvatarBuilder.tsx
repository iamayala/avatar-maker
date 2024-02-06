import React, { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import NormalShape from "../component/avatar/FaceShapes/Normal";
import LongHair from "../component/avatar/HairStyles/Long";
import HappyEye from "../component/avatar/Eyes/Happy";
import DefaultMouth from "../component/avatar/Mouth/Default";
import ThinShape from "../component/avatar/FaceShapes/Thin";
import Classic01Hair from "../component/avatar/HairStyles/Classic01";
import Classic02Hair from "../component/avatar/HairStyles/Classic02";
import CurlyHair from "../component/avatar/HairStyles/Curly";
import ElvisHair from "../component/avatar/HairStyles/Elvis";
import SlaughterHair from "../component/avatar/HairStyles/Slaughter";
import { tabs } from "../constants/utils";
import StylishHair from "../component/avatar/HairStyles/Stylish";
import FreddyMustaches from "../component/avatar/Mustaches/Freddy";
import Horshoe from "../component/avatar/Mustaches/Horshoe";
import PencilThin from "../component/avatar/Mustaches/PencilThin";
import PencilThinBeard from "../component/avatar/Mustaches/PencilThin+Beard";
import GolfBody from "../component/avatar/Body/Golf";
import NormalBody from "../component/avatar/Body/Normal";
import ConfidentEye from "../component/avatar/Eyes/Confident";
import NormalEye from "../component/avatar/Eyes/Normal";
import Glasses from "../component/avatar/Glasses/Glasses";

type FixMeLater = any;

type OptionType = {
	id: string;
	avatarCompnent: any;
	name: string;
	parent: string;
};

const AvatatBuilder = () => {
	const [activeTab, setActiveTab] = useState<{ name: string; key: string }>();
	const [selectedItems, setSelectedItems] = useState<OptionType[]>([]);

	const avatarTypes = [
		{
			id: "head-1",
			avatarCompnent: <NormalShape />,
			name: "Normal",
			parent: "1",
		},
		{
			id: "head-2",
			avatarCompnent: <ThinShape />,
			name: "Normal",
			parent: "1",
		},
		{
			id: "head-3",
			avatarCompnent: <NormalShape />,
			name: "Normal",
			parent: "1",
		},
		{
			id: "hair-1",
			avatarCompnent: <Classic01Hair />,
			name: "Classic01",
			parent: "2",
		},
		{
			id: "hair-2",
			avatarCompnent: <Classic02Hair />,
			name: "Classic02",
			parent: "2",
		},
		{ id: "hair-3", avatarCompnent: <CurlyHair />, name: "Curly", parent: "2" },
		{
			id: "hair-4",
			avatarCompnent: <ElvisHair />,
			name: "ElvisHair",
			parent: "2",
		},
		{
			id: "hair-5",
			avatarCompnent: <LongHair />,
			name: "LongHair",
			parent: "2",
		},
		{
			id: "hair-6",
			avatarCompnent: <SlaughterHair />,
			name: "SlaughterHair",
			parent: "2",
		},
		{
			id: "hair-7",
			avatarCompnent: <StylishHair />,
			name: "StylishHair",
			parent: "2",
		},
		{
			id: "mouth-1",
			avatarCompnent: <DefaultMouth />,
			name: "DefaultMouth",
			parent: "4",
		},
		{
			id: "moustache-1",
			avatarCompnent: <FreddyMustaches />,
			name: "FreddyMustaches",
			parent: "6",
		},
		{
			id: "moustache-2",
			avatarCompnent: <Horshoe />,
			name: "Horshoe",
			parent: "6",
		},
		{
			id: "moustache-3",
			avatarCompnent: <PencilThin />,
			name: "PencilThin",
			parent: "6",
		},
		{
			id: "moustache-4",
			avatarCompnent: <PencilThinBeard />,
			name: "PencilThinBeard",
			parent: "6",
		},
		{
			id: "body-1",
			avatarCompnent: <GolfBody />,
			name: "GolfBody",
			parent: "5",
		},
		{
			id: "body-2",
			avatarCompnent: <NormalBody />,
			name: "NormalBody",
			parent: "5",
		},
		{
			id: "eye-1",
			avatarCompnent: <ConfidentEye />,
			name: "ConfidentEye",
			parent: "3",
		},
		{
			id: "eye-2",
			avatarCompnent: <HappyEye />,
			name: "HappyEye",
			parent: "3",
		},
		{
			id: "eye-3",
			avatarCompnent: <NormalEye />,
			name: "NormalEye",
			parent: "3",
		},
		{
			id: "glasses-1",
			avatarCompnent: <Glasses />,
			name: "Glasses",
			parent: "7",
		},
	];

	// Function to handle item selection
	const handleItemSelection = (newItem: OptionType) => {
		const existingItemWithSameId = selectedItems.find(
			(item) => item.id === newItem.id
		);
		if (existingItemWithSameId) {
			return selectedItems;
		}

		const existingItemWithSameParentIndex = selectedItems.findIndex(
			(item) => item.parent === newItem.parent
		);

		if (existingItemWithSameParentIndex !== -1) {
			const newArray = [...selectedItems];
			newArray[existingItemWithSameParentIndex] = newItem;
			return newArray;
		}

		return [...selectedItems, newItem];
	};

	return (
		<View style={styles.container}>
			<View style={styles.avatarContainer}>
				{selectedItems
					.sort((a, b) => a.parent.localeCompare(b.parent))
					.map((item, index) => {
						return (
							<View key={item.id + index} style={styles.avatarPic}>
								{item.avatarCompnent}
							</View>
						);
					})}
			</View>

			<View style={{ marginTop: 10 }}>
				<Text style={{ fontSize: 20, color: "#8D8D8D" }}>
					Create your own avatar
				</Text>
			</View>

			<View style={styles.colorContainer}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{tabs.map((item, key) => {
						return (
							<TouchableOpacity
								key={key}
								onPress={() => setActiveTab(item)}
								style={{
									height: 45,
									borderWidth: 2,
									borderColor: activeTab === item ? "#2AC3E4" : "black",
									backgroundColor: activeTab === item ? "pink" : "grey",
									paddingHorizontal: 15,
									borderRadius: 10,
									marginRight: 10,
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Text>{item.name}</Text>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</View>
			<ScrollView
				contentContainerStyle={{ borderColor: "pink", borderWidth: 1 }}
			>
				<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
					{avatarTypes
						.filter((item: any) => item.parent === activeTab?.key)
						.map((item) => (
							<TouchableOpacity
								key={item.id}
								onPress={() => {
									setSelectedItems(handleItemSelection(item));
								}}
							>
								{item.avatarCompnent}
							</TouchableOpacity>
						))}
				</View>
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 25,
	},
	header: {
		height: "10%",
		marginTop: 15,
		backgroundColor: "#2AC3E4",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
	},
	avatarContainer: {
		height: "35%",
		marginTop: 10,
		backgroundColor: "#FAF6E0",
		alignItems: "center",
		justifyContent: "center",
	},
	avatarPic: {
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
	},
	colorContainer: {
		height: "8%",
		marginTop: 10,
	},
	item: {
		justifyContent: "center",
		marginLeft: 24,
		padding: 10,
		fontSize: 24,
		borderWidth: 1,
		borderRadius: 20,
		borderColor: "#2AC3E4",
	},
	avatarItems: {
		padding: 5,
		justifyContent: "space-between",
		height: "40%",
		marginTop: 10,
		borderRadius: 10,
		borderColor: "#2AC3E4",
		borderWidth: 1,
	},
});

export default AvatatBuilder;
