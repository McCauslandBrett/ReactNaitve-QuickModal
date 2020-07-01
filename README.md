# React Native Custom Modal
This is a modal creator, Currently UNSTABLE and in construction do not consume.

## Examples
![Artboard](https://user-images.githubusercontent.com/23222526/83095836-113d8780-a059-11ea-94e8-48fbbe696b20.png)

## Usage
```jsx
import React from 'react';
import { Text } from 'react-native';
import {Block} from 'galio-framework';
import CModal from "../components/CModal/CModal.js"


export default class App extends React.Component {
  state={
    visible:false
  };
  toggleOverlay = () =>{
    this.setState({
      visible:!this.state.visible
    });
  }

  render() {
    return (
      <Block safe flex>
        <CModal
          animation={'fade'}
          card full center backdrop
          visible={this.state.visible}
          toggle={this.toggleOverlay}
         >
          <Text>Hello</Text>
        </CModal>
    );
  }
}
```
## Dependencies

```
  npm i -S react-native-swipe-gestures
```
## Props

| Prop  | Type | Default
| ------------- | ------------- |------------- |
| card  | bool  | false |
| backdrop  | bool  | false |
| toggle  | Callback  | - |
| half  | bool  | true |
| full  | bool  | false |
| top  | bool  | false |
| center  | bool  | false |
| animation  | string  | slide |

## Author

* **Brett McCausland** - [McCauslandBrett](https://github.com/McCauslandBrett)
