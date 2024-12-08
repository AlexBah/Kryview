import { StyleSheet } from 'react-native';

const COLORS = {
    backgroundColor: '#333',
    textColor: '#f0f0f0',
    opacity: 0.7,
    buttonColor: '#288BA2',
};

const SIZES = {
    backgroundHeight: '100%',
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.backgroundColor,
    height: '100%',
  },
  frontPicture: {
    height: '50%',
    width: '100%',
    resizeMode: "contain",
  },
  h1: {
    color: COLORS.textColor,
    fontSize: 30,
    fontFamily: "SemiBold",
    alignSelf: "center",
  },
  h2: {
    color: COLORS.textColor,
    fontSize: 12,
    fontFamily: "SemiBold",
    marginHorizontal: 55,
    alignSelf: "center",
    marginTop: 5,
    opacity: COLORS.opacity,
  },
  inputBorder: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 20,
    paddingHorizontal: 10,
    borderColor: COLORS.textColor,
    borderRadius: 23,
    paddingVertical: 2,
    opacity: COLORS.opacity,
  },
  inputIcon: {
    size: 23,
    color: COLORS.textColor,
    opacity: COLORS.opacity,
  },
  inputText: {
    paddingHorizontal: 10,
    fontSize: 15,
    fontFamily: "SemiBold",
    color: COLORS.textColor,
    opacity: COLORS.opacity,
  },
  button: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: COLORS.buttonColor,
    paddingVertical: 2,
    borderRadius: 23,
},
});

export default styles;
