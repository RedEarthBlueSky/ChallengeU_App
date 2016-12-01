import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Camera from 'react-native-camera';
import { setVideo } from '../actions/submission.js';


class CameraComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isRecording: false,
      recordedFile: '',
      buttonStyle: styles.captureStopped,
      source: Camera.constants.Type.back
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureMode={Camera.constants.CaptureMode.video}
          orientation={Camera.constants.Orientation.portrait}
          type={this.state.source}
          playSoundOnCapture={true}
          captureTarget={Camera.constants.CaptureTarget.disk}>
          <Text title="Rec" style={this.state.buttonStyle} onPress={this.startVideo.bind(this)}> </Text>
          <Icon style={styles.iconCamera} name="retweet" size={30} onPress={this.cameraChange.bind(this)}/>
      </Camera>
      </View>
    );
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.isRecording !== nextProps.isRecording && nextProps.token !== '') {
      Actions.main();
    }
  }

  startVideo() {
    console.log('pressed!');
    if (this.camera && !this.state.isRecording) {
      console.log('start recording');
      this.setState({
        isRecording: true,
        buttonStyle: styles.captureRecording
      });
      this.camera.capture()
      .then(
        (data) => {
          console.log(data.path);
          this.setState({
            recordedFile: data.path,
          });
        }
      )
      .catch(err => console.error(err));
    } else {
      console.log('Stop recording...');
      this.camera.stopCapture()
        .then((data) => {
          console.log(data);
          this.setState({
            isRecording: false,
            buttonStyle: styles.captureStopped
          });
          this.props.setVideo(this.state.recordedFile);
        })
        .catch(err => console.error(err));
    }
  }

  cameraChange() {
    if (this.state.source === Camera.constants.Type.front) {
      this.setState({
        source: Camera.constants.Type.back
      });
    } else {
      this.setState({
        source: Camera.constants.Type.front
      });
    }
    console.log('Camera change to:', this.state.source);
  }

  // stopVideo() {
  //   this.camera.stopCapture()
  //     .then((data) => console.log(data))
  //     .catch(err => console.error(err));
  // }

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  captureStopped: {
    position: 'relative',
    backgroundColor: '#f00',
    borderRadius: 40,
    height: 80,
    width: 80,
    color: '#fff',
    borderWidth: 10,
    borderColor: 'white',
    padding: 10,
    textAlign: 'center',
    marginBottom: 60
  },
  captureRecording: {
    position: 'relative',
    backgroundColor: '#333',
    borderRadius: 40,
    height: 80,
    width: 80,
    color: '#fff',
    borderWidth: 10,
    borderColor: 'white',
    padding: 10,
    textAlign: 'center',
    marginBottom: 60
  },
  iconCamera: {
    position: 'absolute',
    bottom: 60,
    left: 40,
    color: '#ddd'
  }
});

const mapDispatchToProps = (dispatch) => ({
  setVideo: (videoPath) => dispatch(setVideo(videoPath))
});

export default connect(({routes, submission})=>({routes, submission}), mapDispatchToProps)(CameraComponent);
