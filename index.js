import React from 'react';
import {Modal, View, Alert} from 'react-native';
import { Block} from 'galio-framework';
import {styles} from './styles';
import PropTypes from 'prop-types';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
const QModal = ({bottom,top,center,full,half,visible,backdrop,animation,toggle,card,...props}) => {
  const styleBack = [
    backdrop && styles.backdrop,
    {width: '100%', height: '100%'}
  ];
  const stylePosition = [
    bottom && {justifyContent:"flex-end"},
    top && {justifyContent:"flex-start"},
    center && {justifyContent:'center'},
    {width: '100%', height: '100%',
    flex: 1,alignItems: 'center' }
  ]
  const styleModal = [
    half &&  styles.half,
    full && !card && styles.full,
    card && half && bottom && styles.cardbottomhalf,
    card && half && top && styles.cardtophalf,
    card && full && styles.cardfull,

  ];
  const onSwipeDown =() => {
      if(!top){
        toggle();
      }
    };
  QModal.defaultProps = {
    bottom:true,top:false,center:false,
    card: false,
    full:false,half:true,
    backdrop:false,
    animation:'slide',
  };
  QModal.propTypes = {
    bottom: PropTypes.bool,top: PropTypes.bool,center: PropTypes.bool,
    card: PropTypes.bool,
    full: PropTypes.bool,
    animation:PropTypes.string,
    backdrop:PropTypes.bool,
  };
  return (
  <GestureRecognizer
   onSwipeDown={() => onSwipeDown()}
   config={{velocityThreshold: 0.9,
            directionalOffsetThreshold: 80
          }}
   >
    <Modal
    animationType={animation}
    transparent={true}
    visible={visible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
    }}
    >
    <Block safe style={stylePosition}>
    <View style={styleBack}/>
    <View style={styleModal}
    >
    {props.children}
    </View>
    </Block>
  </Modal>
  </GestureRecognizer>
  )
}
export default QModal;
