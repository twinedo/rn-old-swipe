import { StyleSheet } from 'react-native';

const borderWidth = 3;
const margin = 1;
const maxContainerHeight = 200;
const Styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    borderRadius: maxContainerHeight / 2,
    // borderRightWidth: 0,
    // borderWidth,
    height: 40,
    borderColor: 'black',
    margin,

  },
  containerRTL: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    borderRadius: maxContainerHeight / 2,
    borderLeftWidth: 0,
    borderWidth,
    margin,
  },
  icon: {
    alignItems: 'center',
    borderRadius: maxContainerHeight / 2,
    borderWidth: 2,
    justifyContent: 'center',
    // marginVertical: -borderWidth,
    height: 50,
    elevation: 2,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  defaultThumbIcon: {
    width: 150,
    height: 150,
    borderRadius: 100 / 2,
    backgroundColor: '#800080',

  },
});

export default Styles;
export { borderWidth, margin };
