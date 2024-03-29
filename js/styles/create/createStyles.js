import { StyleSheet } from 'react-native';
import mainStyles from '../mainStyles';

export const marginInput = 30;
export const buttonFlex = 0.15;
export const iconFlex = 0.25;
export const navbarHeight = 60;

const CreateStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: navbarHeight,
    backgroundColor: mainStyles.color.backgroundNeutral,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  selectedFriendsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: marginInput,
    marginLeft: marginInput,
    justifyContent: 'flex-start',
  },
  inputFont: {
    fontFamily: 'OpenSans-Regular',
    color: mainStyles.color.textMenuAlternate,
    marginLeft: 10,
  },
  placeholderFont: {
    color: mainStyles.color.inputPlaceholder,
    marginLeft: 10,
  },
  dateSetFont: {
    color: mainStyles.color.textMenuAlternate,
    marginLeft: 10,
  },
  missingFont: {
    color: mainStyles.color.missingFields,
    marginLeft: 10,
  },
  buttonOuterContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: mainStyles.color.primary,
    padding: 10,
  },
  buttonFont: {
    fontSize: 16,
    color: mainStyles.color.textMenu,
  },
  removeFriendContainer: {
    position: 'absolute',
    top: -6,
    right: 0,
    width: 22,
    height: 22,
    backgroundColor: '#fc6d4b',
    borderRadius: 11,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: mainStyles.color.backgroundNeutral,
    alignItems: 'center',
  },
  removeFont: {
    color: mainStyles.color.backgroundNeutral,
    lineHeight: 15,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default CreateStyles;
