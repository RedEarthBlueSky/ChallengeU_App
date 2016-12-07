import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
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

class Challenge extends React.Component {
  state = {
    paused: true
  }

  constructor(props) {
    super(props)
  }

  togglePlay = () => this.setState({
    paused: !this.state.paused
  })

  playVideo = function () {
    return (
      <TouchableOpacity onPress={this.togglePlay}>
        <VideoComponent source={{uri: this.props.videoURL}}
         ref={(vid) => {
           this.vid = vid
         }}
         width={Dimensions.get("window").width}
         height={180}
         rate={1.0}
         volume={1.0}
         muted = {false}
         paused={this.state.paused}
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
       </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Image source={{ uri: this.props.authorId.profileInfo.picture}} style={styles.photo} />
          <Text style={styles.text}>
            {`${this.props.authorId.profileInfo.firstName} ${this.props.authorId.profileInfo.lastName} took the`} <Text style={{fontWeight: 'bold'}}> {this.props.challengeTypeId.title} </Text>
          </Text>
        </View>
        <View style={styles.information}>
          {this.playVideo()}
          <Text style={styles.text}> {this.props.authorId.profileInfo.firstName} has engaged 18 people </Text>
          <Text style={styles.text}> 156 people took the challenge in total </Text>
        </View>
      </View>
    )
  }
}

export default Challenge;
