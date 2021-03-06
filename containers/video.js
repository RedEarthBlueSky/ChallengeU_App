import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import Video from 'react-native-video';


class VideoComponent extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
        <VideoComponent source={{uri: "http://techslides.com/demos/sample-videos/small.mp4"}}
         ref={(vid) => {
           this.vid = vid
         }}
         width={400}
         height={400}
         rate={1.0}
         volume={1.0}
         muted = {false}
         paused={false}
         resizeMode="cover"
         repeat={true}
         playInBackground={false}
         playWhenInactive={false}
         onLoadStart={this.loadStart}
         onLoad={this.setDuration}
         onProgress={this.setTime}
         onEnd={this.onEnd}
         onError={this.videoError}
         style={styles.backgroundVideo} />



    );
  }

  // fullScreen() {
  //   // Later to trigger fullscreen
  //   this.vid.presentFullscreenPlayer()
  // }


  // // To set video position in seconds (seek)
  // this.player.seek(0)

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

const mapDispatchToProps = (dispatch) => ({
  // loginAction: (user, pass) => dispatch(loginAction(user, pass)),
});


export default connect(({routes, auth})=>({routes, auth}), mapDispatchToProps)(VideoComponent);
