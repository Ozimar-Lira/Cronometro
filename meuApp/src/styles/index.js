
  import { StyleSheet, Dimensions, Text } from 'react-native'; 

  // Tamanho da largura da tela
  var width = Dimensions.get('window').width;

  // Estilização do componente Form
  const form = StyleSheet.create({
    container: {
      margin: 20      
    },
    texts: {
      textAlign:'center',
      color: "#772ea2",
      fontSize: 150,
      fontWeight: "bold", 
      borderBottomWidth: 1,
      borderBottomColor: '#772ea2'

    },
    inputs: {
      borderBottomWidth: 1,
      borderBottomColor: '#772ea2'
    },
    button: {
    //  width: 100,
    //  height: 50,
      color:"#f194ff",
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  });

  // Estilização do componente Header
  const header = StyleSheet.create({
    background: {
      width: width,
      height: 180,
      backgroundColor: "#772ea2"
    },
    container: {
      left: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
   /* title: {
      fontSize: 32,
      color: "white",
      fontWeight: "bold"
    },
    subtitle: {
      fontSize: 14,
      color: "white",
      fontWeight: "500"
    },*/
    logo: {
      width: 180,
      height: 180,
      right: 20,
      //position: "absolute",
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  export { form, header };