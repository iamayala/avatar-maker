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

export default function App(props: any) {
  return (
    <><View style={styles.container}>
        <StylishHair/>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
