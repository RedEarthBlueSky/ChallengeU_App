import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  information: {
    flexDirection: 'row',
    paddingTop: 17
  },
  text1: {
    marginTop:3,
    marginLeft: 25,
    fontSize: 16
  },
  text2: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: 'bold'
  },
  photo: {
    marginLeft: 12,
    height: 30,
    width: 30,
    borderRadius: 20
  },
  video: {
    marginTop: 15,
    height: 180,
    width: Dimensions.get("window").width
  }
});



const Submission = (props) => {

  renderFriends = function () {
    return props.challengedUsers.map(function(user) {
      let actualState = user.status === 'Done' ? "has took it" : "haven't took it yet";
      return (
        <View style={styles.information}>
          <Image source={{ uri: user.userPic}} style={styles.photo} />
          <Text style={styles.text1}>
            {`${user.userName} ${actualState}`}
          </Text>
        </View>
        )
    });
  }

  return (
  <View style={{flex: 1, paddingTop: 10, paddingBottom: 10}}>

    <View style={styles.container}>

      <Text style={styles.text2}> {props.challengeName} </Text>
      <Image source={{ uri: props.captureURL}} style={styles.video} />

    </View>

    {renderFriends()}

  </View>
  )
};

export default Submission;