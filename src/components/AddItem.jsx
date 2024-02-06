import { Pressable, StyleSheet, Text, View, } from "react-native";



const addItem = () =>{
    return (
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
)
};

const styles = StyleSheet.create({
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
});

export default addItem;