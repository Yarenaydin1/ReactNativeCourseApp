import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import CourseInput from '../components/CourseInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courses, setCourses] = useState([]);

  const startModal = () => {
    setModalIsVisible(true);
  };

  const endModal = () => {
    setModalIsVisible(false);
  };

  const addCourse = (courseTitle) => {
    setCourses((currentCourses) => [
      ...currentCourses,
      { text: courseTitle, id: Math.random().toString() },
    ]);
    endModal();
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
      
        <View style={styles.buttonContainer}>
          <Button title="Add Course" color="purple" onPress={startModal} />
        </View>

      
        <CourseInput visible={modalIsVisible} onAddCourse={addCourse} onCancel={endModal} />

     
        <FlatList
          data={courses}
          renderItem={({ item }) => (
            <View style={styles.courseItem}>
              <Text style={styles.courseText}>{item.text}</Text>
            </View>
          )}
          style={styles.courseList}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ccff',
    alignItems: 'center', 
    paddingTop: 50, 
  },
  buttonContainer: {
    marginBottom: 20, 
    width: '80%', 
  },
  courseList: {
    flex: 1, 
    width: '80%', 
  },
  courseItem: {
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 20, 
    borderRadius: 5,
  },
  courseText: {
    padding: 10,
    color: 'black',
    fontWeight: '400',
  },
});
