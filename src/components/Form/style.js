import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: 40,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 40,
    padding: 10,
  },
  formLabel: {
    fontSize: 18,
    marginBottom: 10,
    paddingLeft: 25,
  },
  formInput: {
    width: "90%",
    backgroundColor: "#f4f4f4",
    height: 50,
    borderRadius: 50,
    marginBottom: 20,
    paddingLeft: 15,
    alignSelf: "center",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ff0043",
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingTop: 12,
    paddingBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default styles;
