import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function CourseInput({ visible, onAddCourse , onCancel}) {
  const [enteredCourseText, setEnteredCourseText] = useState('');

  const addCourseHandler = () => {
    if (enteredCourseText.trim().length > 0) {
      onAddCourse(enteredCourseText);
      setEnteredCourseText(''); 
    }
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/aylogo.jpg')} />
        <TextInput
          style={styles.textInput}
          placeholder="Add new course"
          value={enteredCourseText}
          onChangeText={(text) => setEnteredCourseText(text)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" color="green" onPress={addCourseHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
 
  inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#e6ccff',
    padding:20
  },
  image:{
    width:150,
    height:150,
    borderRadius:30,
    margin:20,
  },
  textInput:{
    borderWidth:1,
    width:'100%',
    padding:10,
    borderRadius:30,
    backgroundColor:'white',
    borderColor:'black',
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:25,
   
  },

  button:{
    width:100,
    marginHorizontal:10,
    
  }

})