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
    marginTop: 30,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 45,
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
    paddingLeft: 15,
    alignSelf: "center",
    fontSize: 16,
    marginBottom: 30,
  },
  mensagemErro: {
    fontSize: 12,
    color: "red",
    paddingLeft: 25,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ff0043",
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingVertical: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default styles;
