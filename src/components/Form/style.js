import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: 30,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 5,
    paddingVertical: 45,
    paddingHorizontal: 5,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: "bold",
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
  buttonSubmit: {
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
  listaImcTitulo: {
    color: "#ff0043",
    fontWeight: "bold",
    fontSize: 24,
  },
  listaImc: {
    height: '20%',
  },
  listaImcItem: {
    width: "100%",
    color: "#ff0043",
    fontSize: 18,
    marginTop: 20,
    paddingRight: 10,
  },
});

export default styles;
