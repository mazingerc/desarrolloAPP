import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';
import { Text, View, Image, TextInput, StyleSheet, Pressable, FlatList,} from "react-native";
import Usuario from "./src/components/Usuario";
import RemoveModal from "./src/components/RemoveModal";
import addItem from "./src/components/AddItem";
import lista from "./src/components/Lista";


const DATA = [
  {
    name: "Remera",
    id: 1,
  },
  {
    name: "Pantalón",
    id: 2,
  },
  {
    name: "Gorra",
    id: 3,
  },
];


export default function App() {
  const [counter, setCounter] = useState (0);
  const [inputValue, setInputValue] = useState('');
  const [cartItems, setCartItems] = useState ([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleAddCounter = () => setCounter (counter +1);
  const handleInputChange = (value) => setInputValue(value);
  const handleModal = (id) => {
    setModalVisible (true);
    setItemSelected (id);
  };
  const addItem = ()=> {
    const newItem = {
      name:inputValue,
      id:new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };
  

  return (
   <View style={styles.container}>
    <StatusBar style="auto"/>
    <RemoveModal 
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}/>

    <View style={styles.header}>
      <Text> CARRITO </Text>
      <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png'}}/>
    </View>

    <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputChange}
          value={inputValue}
          style={styles.input}
          placeholder="Ingrese un producto"
        />

    <Pressable onPress={addItem}>
      <Text style={{ fontSize: 40 }}>+</Text>
    </Pressable>
  </View>
  
  <View style={styles.productList}>
    <FlatList
    data={cartItems} 
    renderItem={({item})=> (
      <View style={{width:400, flexDirection: 'row'}}> 
        <Text style={styles.product}>{item.name}</Text>
        <Pressable onPress={()=> handleModal(item.id)}>
          <Text style={{fontSize: 20}}>❌</Text>
        </Pressable>
      </View>
    )}
    keyExtractor={(item) => item.id}/>
   
    <Pressable onPress={handleAddCounter}>
      <Text style={{fontSize: 20}}>{counter}</Text>
    </Pressable>
    <Text>Valor del input: {inputValue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },

  productList: {
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 10,
  },

  product: {
    fontSize:16,
    fontWeight: 'bold', 
    padding: 4,
  },

  input: {
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "90%",
  },
  inputContainer: { 
    flexDirection: "row" 
  },

  image: {
    width: 50,
    height: 50,
  },
})