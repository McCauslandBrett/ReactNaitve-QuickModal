import { StyleSheet,Dimensions } from "react-native";
import theme from './theme';
const { width } = Dimensions.get('screen');
export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: "white",
    elevation: 5
  },
  cardfull:{
    width: width - theme.SIZES.BASE * 2,
    padding: 35,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",

  },
  cardbottomhalf:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
  },
  cardtophalf:{
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
  },
  full:{
    height: '100%',
  },
  half:{
    height: '50%',
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    flex: 1
  },
  backdrop:{
    backgroundColor: 'black', opacity: .6,
  }
});
