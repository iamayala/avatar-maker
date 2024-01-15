import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NormalShape from './src/component/avatar/FaceShapes/Normal';
import WideShape from './src/component/avatar/FaceShapes/Wide';
import ThinShape from './src/component/avatar/FaceShapes/Thin';
import HappyEye from './src/component/avatar/Eyes/Happy';
import GolfBody from './src/component/avatar/Body/Golf';
import Glasses from './src/component/avatar/Glasses/Glasses';
import BlandessHair from './src/component/avatar/HairStyles/Balndess';
import StylishHair from './src/component/avatar/HairStyles/Stylish';
import LongHair from './src/component/avatar/HairStyles/Long';
import PonyTailHair from './src/component/avatar/HairStyles/PonyTail';
import SlaughterHair from './src/component/avatar/HairStyles/Slaughter';
import CurlyHair from './src/component/avatar/HairStyles/Curly';
import NormalBody from './src/component/avatar/Body/Normal';
import ConfidentEye from './src/component/avatar/Eyes/confident';
import DefaultMouth from './src/component/avatar/Mouth/Default';

export default function App(props: any) {
  return (
    <>
      <View style={styles.container}>
        <NormalShape/>
      </View>
      <View style={styles.container}>
        <LongHair/>
      </View> 
      <View style={styles.container}>
        <HappyEye/>
      </View> 
      <View style={styles.container}>
        <DefaultMouth/>
      </View> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
