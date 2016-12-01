import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import VideoComponent from 'react-native-video';


const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  information: {
    flexDirection: 'column'
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    lineHeight: 30
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
});

const Challenge = (props) => {

  playVideo = function () {
    return (
        <VideoComponent source={{uri: props.videoURL}}
         ref={(vid) => {
           this.vid = vid
         }}
         width={Dimensions.get("window").width}
         height={180}
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
    )
  }  

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={{ uri: props.pictureId}} style={styles.photo} />
        <Text style={styles.text}>
          {`${props.userName} took the`} <Text style={{fontWeight: 'bold'}}> "challenge name" </Text>
        </Text>
      </View>
      <View style={styles.information}>
        {playVideo()}
        <Text style={styles.text}> {props.userName} has engaged 18 people </Text>
        <Text style={styles.text}> 156 people took the challenge in total </Text>
      </View>
    </View>
  )
};

export default Challenge;