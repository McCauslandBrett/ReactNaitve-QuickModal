# React Native Quick Modal
This is a React Native Quick Modal creator.
## Examples
![Artboard](https://user-images.githubusercontent.com/23222526/83095836-113d8780-a059-11ea-94e8-48fbbe696b20.png)

## Usage
```jsx
import React from 'react';
import { Text } from 'react-native';
import {Block,Button} from 'galio-framework';
import QModal from "rn-qmodal";


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
        <QModal
          animation={'fade'}
          card full center backdrop
          visible={this.state.visible}
          toggle={this.toggleOverlay}
         >
            <Button onPress={()=>{this.toggleOverlay()}}style={{marginVertical:20}} 
                  round uppercase color={"#50C7C7"}>Open
          </Button>
        </QModal>
        </Block>
    );
  }
}
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
