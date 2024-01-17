import React, { useState } from "react";
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native'
import NormalShape from "../component/avatar/FaceShapes/Normal";
import LongHair from "../component/avatar/HairStyles/Long";
import HappyEye from "../component/avatar/Eyes/Happy";
import DefaultMouth from "../component/avatar/Mouth/Default";
import ThinShape from "../component/avatar/FaceShapes/Thin";
import WideShape from "../component/avatar/FaceShapes/Wide";
import Classic01Hair from "../component/avatar/HairStyles/Classic01";
import Classic02Hair from "../component/avatar/HairStyles/Classic02";
import CurlyHair from "../component/avatar/HairStyles/Curly";
import ElvisHair from "../component/avatar/HairStyles/Elvis";
import SlaughterHair from "../component/avatar/HairStyles/Slaughter";
type FixMeLater = any;
export default function AvatatBuilder()  {
    const [highlightedIndex, setHighlightedIndex] = useState<FixMeLater>(null);
    const [selectedItems, setSelectedItems] = useState([])
    const [avatar, setAvatar] = useState([
        {name: 'Face Shape', key: '1'},
        {name: 'Hair Styles', key: '2'},
        {name: 'Eyes', key: '3'},
        {name: 'Mouth', key: '4'},
        {name: 'Body', key: '5'},
        {name: 'Mustaches', key: '6'},
        {name: 'Glasses', key: '7'},
    ])
    const avatarTypes = [
        {id:'head-1', avatarCompnent: <NormalShape/>, name: 'Normal', parent: '1'},
        {id:'head-2', avatarCompnent: <ThinShape/>, name: 'Normal', parent: '1'},
        {id:'head-3', avatarCompnent: <NormalShape/>, name: 'Normal', parent: '1'},
        //Hair
        {id:'hair-1', avatarCompnent: <Classic01Hair/>, name: 'Classic01', parent: '2'},
        {id:'hair-2', avatarCompnent: <Classic02Hair/>, name: 'Classic02', parent: '2'},
        {id:'hair-3', avatarCompnent: <CurlyHair/>, name: 'Curly', parent: '2'},
        {id:'hair-4', avatarCompnent: <ElvisHair/>, name: 'ElvisHair', parent: '2'},
        {id:'hair-5', avatarCompnent: <LongHair/>, name: 'LongHair', parent: '2'},
        {id:'hair-6', avatarCompnent: <SlaughterHair/>, name: 'SlaughterHair', parent: '2'},
    ]

    const toggleAvatarType = (id: any) => {
        // Create a new Set with the existing selected items

        // If the id is already selected, remove all occurrences of it from the array
        const isSelected = selectedItems.includes(id);

    // If the id is not selected, add it to the array
    if (!isSelected) {
        setSelectedItems([...selectedItems, id]);
    }
    }
    return (
        <>
            <View style={styles.container}>
                <View style= {styles.header}>
                    <Text style= {styles.headerTitle}>Avatar Builder</Text>   
                </View>
                <View style= {styles.avatarContainer}>
                    <View style = {styles.avatarPic}>
                        <NormalShape width={200} height={200}/>
                    </View>
                    <View style = {styles.avatarPic}>
                        <LongHair width={200} height={200}/>
                    </View>
                    <View style = {styles.avatarPic}>
                        <HappyEye width={200} height={200}/>
                    </View>
                    <View style = {styles.avatarPic}>
                        <DefaultMouth width={200} height={200}/>
                    </View>
                </View>

                <View style= {{marginTop:10}}>
                    <Text style={{fontSize: 20, color: '#8D8D8D'}}>Create your own avatar</Text>
                </View>
                <View style={styles.colorContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {avatar.map((item, key)=>(
                            <View key={item.key} style={{justifyContent:'center'}}>
                                <TouchableHighlight key={key} onPress={()=>{
                                    console.log('clicked', item.name);
                                }}
                                underlayColor=''
                                onHideUnderlay={() => setHighlightedIndex(key)}
                                onShowUnderlay={() => setHighlightedIndex(key)}
                                >
                                    <Text style={[styles.item, highlightedIndex === key && styles.highlightedText]}>{item.name}</Text>
                                </TouchableHighlight>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.avatarItems}>
                    <ScrollView>
                        {avatarTypes.map((items, id) =>(
                            <View key={items.id}>
                                <TouchableOpacity key={items.id} onPress={()=>{
                                    toggleAvatarType(items.id)
                                    console.log('Clicked Type: ----->', selectedItems);
                                    }}
                                    >
                                    {items.avatarCompnent}
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View> 
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      //position: 'absolute',
      //backgroundColor: 'red',
        alignItems: 'center',
    },
    header :{
        width: '80%',
        height: '10%',
        marginTop: 15,
        backgroundColor: '#2AC3E4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    headerTitle: {
        fontSize: 30,
    },
    avatarContainer: {
        width: '80%',
        height: '35%',
        marginTop: 10,
        backgroundColor: '#FAF6E0',
        alignItems: 'center',
        justifyContent: 'center',

    },
    avatarPic:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorContainer: {
        width: '80%',
        height: '8%',
        //marginLeft: 70,
        marginTop: 10,
        //backgroundColor:'#FAF6E0'
    },
    item: {
        justifyContent:'center',
        marginLeft: 24,
        padding: 10,
        fontSize: 24,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#2AC3E4'
        //backgroundColor: '#EBEBEB'
    },
    avatarItems: {
        width: '80%',
        padding: 5,
        justifyContent: 'space-between',
        height: '35%',
        //backgroundColor: 'green',
        marginTop: 10,
        borderRadius: 10,
        borderColor: '#2AC3E4',
        borderWidth: 1

    },
    highlightedText: {
        backgroundColor: '#7862FF',
        borderWidth: 0,
        color: 'white'
    },
    highlightedAvatarItem: {
        borderColor: 'blue', // Change the border color for selected items
      },
      avatarItemText: {
        marginTop: 5,
        fontSize: 16,
      },
  });