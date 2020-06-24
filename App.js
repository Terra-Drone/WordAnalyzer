import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      cons: 0,
      vow: 0,
      char: 0,
      num: 0,
      sym: 0
    }
  }

  calculate = () => {
    let word = this.state.char; //transfer input from render()
    let arr = word.split(""); //remove spaces from input
    let totalChar = arr.length; //get input length
    
    //set for counting param
    let totalVow = 0;
    let totalCons = 0;
    let totalNum = 0;
    let totalSym = 0;
    
    for(var i=0; i<totalChar; i++){
      if ((word.charAt(i).match(/[aeiouAIEOU]/))){  //get vowels
        totalVow++;
      }
      else if((word.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))){  //get consonants
        totalCons++
      }
      else if((word.charAt(i).match(/[1234567890]/))){  //get numbers
        totalNum++
      }
      else if(word.charAt(i)!==" "){  //get special characters
        totalSym++
      }
    }

    //return data to render()
    this.setState({char: totalChar}, () => {});
    this.setState({word: word}, () => {});
    this.setState({vow: totalVow}, () => {});
    this.setState({cons: totalCons}, () => {});
    this.setState({num: totalNum}, () => {});
    this.setState({sym: totalSym}, () => {});
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
          <Text style={Styles.welcome}>Word Analyzer</Text>
        </View>
        
        <View style={Styles.container}>
        <TextInput onChangeText={(char) => this.setState({char})} style={Styles.instructions} placeholder='Input Here'/>
        </View>

        <View style={Styles.container}>
          <Button color="green" onPress={this.calculate} title='Analyze'/>
        </View>
        <View style={Styles.container}>
          <Text style={Styles.instructions}>Input : {this.state.word}</Text>
          <Text style={Styles.instructions}>Characters : {this.state.char}</Text>
          <Text style={Styles.instructions}>Vowels : {this.state.vow}</Text>
          <Text style={Styles.instructions}>Consonants : {this.state.cons}</Text>
          <Text style={Styles.instructions}>Numbers : {this.state.num}</Text>
          <Text style={Styles.instructions}>Special Characters : {this.state.sym}</Text>
        </View>
      </View>
    );
  }
}
