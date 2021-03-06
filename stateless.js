/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Alert,AppRegistry, Text, TextInput, Button, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';


const Shop = ({ navigation }) => (
  <View style={styles.container}>
    <TextInput
      style={{height: 40}}
      placeholder="Enter Name"
  //    onChangeText ={(textN) => this.setState({textN})}
    />
    <Text>
  Your Name is :
    </Text>
    <TextInput
      style={{height: 80}}
      placeholder="Enter Address"
    //  onChangeText ={(textA) => this.setState({textA})}
    />
    <Text>
  Your Address is :
    </Text>
    <Button
        onPress={() => navigation.navigate('FoodScreen')}
        title="Food Joint"
    />
    <Text>

    </Text>
    <Text>

    </Text>
    <Text>

    </Text>
    <Button
        onPress={() => navigation.navigate('WineScreen')}
        title="Wine Shop"
    />
  </View>
);
/*export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
    _onPressFood() {
    Alert.alert('You tapped the food button!');
    <Text>
    	Food
    </Text>
  }
    _onPressWine() {
    Alert.alert('You tapped the wine button!');
  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Name"
          onChangeText ={(textN) => this.setState({textN})}
        />
        <Text>
    	Your Name is : {this.state.textN}
        </Text>
        <TextInput
          style={{height: 80}}
          placeholder="Enter Address"
          onChangeText ={(textA) => this.setState({textA})}
        />
        <Text>
    	Your Address is : {this.state.textA}
        </Text>
        <Button
            onPress={() => navigate('FoodScreen')}
            title="Food Joint"
        />
        <Text>

        </Text>
        <Text>

        </Text>
        <Text>

        </Text>
        <Button
            onPress={() => navigate('WineScreen')}
            title="Wine Shop"
        />
      </View>
    );
  }
}
*/


const FoodScreen = ({ navigation }) => (
<Text>
<Button
    onPress={() => navigation.navigate('WineScreen')}
    title="Wine Shop"
/>
Food Joint
</Text>
);
FoodScreen.navigationOptions = props => {
  const { navigate } = this.props.navigation;
  return{
    title: 'Food',
  }
};

const WineScreen = ({ navigation }) => (
<Text>
Wine Joint
</Text>
);
WineScreen.navigationOptions = props => {
  const { navigate } = this.props.navigation;
  return{
    title: 'Wine',
  }
};

const SimpleStack = StackNavigator({
  Shop: {
    screen: Shop,
  },
  Food: {
    screen: FoodScreen,
  },
  Wine: {
    screen: WineScreen,
  },
});

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
// skip this line if using Create React Native App
export default SimpleStack;
AppRegistry.registerComponent('Test4', () => SimpleStack);
