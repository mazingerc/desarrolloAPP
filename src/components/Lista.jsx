import { FlatList, StyleSheet, Text, Pressable, View, } from "react-native";


const lista = () => {
    return (
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
    );
};

const styles = StyleSheet.create({
    productList: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingVertical: 10,
      },
});

export default lista;