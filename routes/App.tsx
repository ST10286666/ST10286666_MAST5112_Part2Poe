/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';





import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';

const App = () => {
  const [BookTitle, setBookTitle] = useState('');
  const [BookAurthor, setBookAurthor] = useState('');
  const [BookNumOfPage, setBookNumOfPage] = useState('');
  const [Genre, setGenre] = useState('');
  

  
  //BUtton//

  const onPressHandler=()=>{
  
  }
  //List//
  const HorrorButton = () => {
  
    var Horrori = "Horror";
    setGenre(Horrori);
  }

  const RomanceButton = () => {
  
    var Romancei = "Romance";
    setGenre(Romancei);
  }

  const NovelButton = () => {
  
    var Noveli = "Novel";
    setGenre(Noveli);
  }

  const HistoricalButton = () => {
  
    var Historicali = "Historical";
    setGenre(Historicali);
  }

  const FictionButton = () => {
  
    var Fictioni = "Fiction";
    setGenre(Fictioni);
  }

  const SciencefictionButton = () => {
  
    var Sciencefictioni = "Science Fiction";
    setGenre(Sciencefictioni);
  }

  const ThrillerButton = () => {
  
    var Thrilleri = "Thriller";
    setGenre(Thrilleri);
  }

  const MysteryButton = () => {
  
    var Mysteryi = "Mystery";
    setGenre(Mysteryi);
  }

  const AdventureButton = () => {
  
    var Adventurei = "Adventure";
    setGenre(Adventurei);
  }

  const PoetryButton = () => {
  
    var Poetryi = "Poetry";
    setGenre(Poetryi);
  }

  const ActionButton = () => {
  
    var Actioni = "Action";
    setGenre(Actioni);
  }

  const TrueCrimeButton = () => {
  
    var TrueCrimei = "True Crime";
    setGenre(TrueCrimei);
  }

  const BiographyButton = () => {
  
    var Biographyi = "Biography";
    setGenre(Biographyi);
  }

    <View style={{padding: 10}}></View>

    
    
 
  return (
    <SafeAreaView style={styles.wrapper}>
    <View style ={styles.HeaderContainer}>
      <Text style = {styles.HeaderText}>
        Add Book
      </Text>
    </View>
    <View style={styles.DataContainer}>
    <Text style={styles.Data}>Enter the Title of the book</Text>
    <TextInput
        style={{height: 40, borderWidth: 2, width: 355, marginTop:10, marginBottom:10,}}
        placeholder="The Title is?"
        onChangeText={newText => setBookTitle(newText)}
        defaultValue={BookTitle}
      />
    </View>
    <View style={styles.DataContainer}>
    <Text style={styles.Data}> Enter the Author of the book</Text>
    <TextInput
        style={{height: 40, borderWidth: 2, width: 355, marginTop:10, marginBottom:10,}}
        placeholder="The Author is?"
        onChangeText={newText => setBookAurthor(newText)}
        defaultValue={BookAurthor}
      />
    </View>

    <View style={styles.DataContainer}> 
    <Text style={styles.Data}>Choose the Genre of the book</Text>
    <ScrollView style = {styles.ListContainer}>

    <TouchableOpacity onPress={HorrorButton}>
    <Text style ={styles.ListData}>Horror</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={RomanceButton}>
    <Text style ={styles.ListData}>Romance</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={NovelButton}>
    <Text style ={styles.ListData}>Novel</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={HistoricalButton}>
    <Text style ={styles.ListData}>Historical</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={FictionButton}>
    <Text style ={styles.ListData}>Fiction</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={SciencefictionButton}>
    <Text style ={styles.ListData}>Science Fiction</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={ThrillerButton}>
    <Text style ={styles.ListData}>Thriller</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={MysteryButton}>
    <Text style ={styles.ListData}>Mystery</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={AdventureButton}>
    <Text style ={styles.ListData}>Adventure</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={PoetryButton}>
    <Text style ={styles.ListData}>Poetry</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={ActionButton}>
    <Text style ={styles.ListData}>Action</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={TrueCrimeButton}>
    <Text style ={styles.ListData}>True Crime</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={BiographyButton}>
    <Text style ={styles.ListData}>Biography</Text>
    </TouchableOpacity>

    </ScrollView>
    </View>

    <View style={styles.DataContainer}>
    <Text style={styles.Data}>Enter the Number of pages in the book</Text>
    <TextInput
        style={{height: 40, borderWidth: 2, width: 355, marginTop:10, marginBottom:10,}}
        placeholder="The Number of pages is?"
        onChangeText={newText => setBookNumOfPage(newText)}
        defaultValue={BookNumOfPage}
      />
    </View>
    <View style={styles.DataContainer}>
      <Text style={styles.Data}>
        Total Number of pages of all books
      </Text>
      <Text style={styles.Data}>
        Average Number of pages all books
      </Text>
    </View>

    <View style={styles.Button}>
  <Button
   title={'Add book'}
   color="orange"
   onPress={onPressHandler}
  />
  </View>
   
    <View style = {styles.LastReadContainer}>
  <View>
    <Text style = {styles.LastReadData}>
      Book Title: {BookTitle}
    </Text>
    <Text style = {styles.LastReadData}>
      Book Title: {BookAurthor}
    </Text>
    <Text style = {styles.LastReadData}>
      Book Genre: {Genre}
    </Text >
    <Text style = {styles.LastReadData}>
      Number of pages: {BookNumOfPage}
    </Text>
  </View>
</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  HeaderContainer:{
    alignItems: 'baseline',
    marginLeft: 10,
    marginTop:90,
  },

  HeaderText:{
   color: 'black',
   fontSize:24,
  },

  DataContainer:{
  alignItems: 'baseline',
    marginLeft: 10,

  },

  wrapper: {
    flex: 1,
  },

  LastReadContainer:{
    borderWidth: 2,
    alignItems: 'center',
   marginLeft:180,
   marginRight: 180,
  marginBottom:20,
  marginTop:20,
  
  },

  LastReadData:{
  color: 'black'
  },

  ListContainer:{
   borderWidth:2,
   marginRight: 500,
   marginTop:10,
   marginBottom:10,
   height:70,
  },

  ListData:{
   borderWidth:2,
   color:'black',
   backgroundColor: 'orange',
  },

  Data:{
   color: 'black',
  },

  Button:{
   alignItems: 'center',
   marginTop:40,
   color: 'black'
  }
  


  })

   //Refrence List//
  //https://www.youtube.com/watch?v=c_7ukxJz1wE&t=287s
//https://www.youtube.com/watch?v=OmQCU-3KPms
//https://www.youtube.com/watch?v=-40TBdSRk6E
//https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwicxOf_pJSCAxWVV0EAHROqBQsQFnoECAoQAQ&url=https%3A%2F%2Freactnative.dev%2Fdocs%2Fimage&usg=AOvVaw3uN5qTrL0bSF8NOBmrM3tA&opi=89978449
//https://reactnative.dev/docs/textinput
//https://legacy.reactjs.org/docs/hooks-state.html
export default App;