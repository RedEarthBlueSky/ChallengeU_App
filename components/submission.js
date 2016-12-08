import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import VideoComponent from 'react-native-video';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  information: {
    flexDirection: 'row',
    paddingTop: 17
  },
  text1: {
    fontFamily: 'patuaone',
    marginTop:3,
    marginLeft: 25,
    fontSize: 16
  },
  text2: {
    fontFamily: 'patuaone',
    marginLeft: 12,
    fontSize: 18,
    fontWeight: 'bold'
  },
  video: {
    marginTop: 15,
    height: 180,
    width: Dimensions.get("window").width
  }
});


class Submission extends React.Component {

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

  renderFriends = function () {
    // mis hojooooooossssss!!!
    personalized = function(status) {
      return {
        marginLeft: 12,
        height: 35,
        width: 35,
        borderRadius: 20,
        borderColor: this.chooseColor(status),
        borderWidth : 2
     }
   }

    chooseColor = function(status) {
      if (status === 'Done') return 'green';
      else return 'red';
    }

    return this.props.challengedUsers.map(function(user) {
      let actualState = user.status === 'Done' ? "has taken it" : "hasn't taken it yet";
      return (
        <View style={styles.information} key={user._id}>
          <Image source={{ uri: user.picture}} style={this.personalized(user.status)} />
          <Text style={styles.text1}>
            {`${user.name} ${actualState}`}
          </Text>
        </View>
        )
    });
  }


  render() {
    return (
    <View style={{flex: 1, paddingTop: 10, paddingBottom: 10}}>

      <View style={styles.container}>

        <Text style={styles.text2}> {this.props.challengeTypeId.title} </Text>
        {this.playVideo()}

      </View>

      {this.renderFriends()}
    </View>
    )
  }
};

export default Submission;
