import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useState } from 'react';

export default function App() {
  const [ textItem, setTextItem ] = useState("");
  const [ list, setList ] = useState([]);
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ itemSelected, setItemSelected ] = useState({});

  const onHandleChange = (t) => setTextItem(t);

  const addItem = () => {
    setList((currentState) => [
      ...currentState, 
      { id: Math.random().toString(), value: textItem },
    ]);
    setTextItem("");
    console.log("Item Agregado")
  };

  const selectedItem = (id) => {
    setItemSelected(list.filter((item) => item.id === id)[0])
    setModalVisible(true)
  };

  const deleteItem = () => {
    setList((currentState) => 
      currentState.filter((item) => item.id !== itemSelected.id) 
    );
    setItemSelected({});
    setModalVisible(false);
    console.log("Item Borrado")
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => selectedItem(item.id)}>
        <Text>{item.value}</Text>
      </TouchableOpacity>)
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Lista de Compras</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="nuevo item"
            placeholderTextColor="white"
            style={styles.inputStyle}
            value={textItem}
            onChangeText={onHandleChange}
          />
          <TouchableOpacity style={styles.button} onPress={addItem}>
            <Text> Add </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={{ backgroundColor: "white" }}>
              <Text>Seguro?</Text>
              <Pressable 
                onPress={() => deleteItem()}
                style={{ backgroundColor: "red" }}
              >
                <Text style={styles.textStyle}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
        </Modal> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#344955',
    alignItems: "center",
    paddingTop: 100,
  },
  inputContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  inputStyle: {
    borderBottomColor: 'black',
    borderBottoWidth: 1,
    width: 250,
  },
  button: {
    backgroundColor: '#F9AA33',
    height: 35,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  textStyle: {
    fontSize: 15,
  },
});
