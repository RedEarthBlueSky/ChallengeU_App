import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Challenge from '../components/challenge.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
});

class SpecificChallenge extends React.Component {
  challengeList = 
  [
    {
      "id": "as7923ljksf9832iofwoi",
      "authorId": "s7sd6h87s78h6",
      "userName": "Harold Vinolas",
      "pictureId": "https://randomuser.me/api/portraits/men/4.jpg",    
      "challengedUsers": [
        {
          "userId": "k32j45l3kj5l32kj",
          "status": "waiting..."
        },
        {
          "userId": "k32j4fsdf5l332kj",
          "status": "Done",
          "submissionId": "sdgjsldgf93480"
        },
        {
          "userId": "sfsd45l3kj5l32kj",
          "status": "waiting..."
        }
      ],
      "challengeTypeId": "89ssgs9t0w8s0gsg0",
      "comment": "Dude, that was disgusting!",
      "videoURL": "http://techslides.com/demos/sample-videos/small.mp4",
      "captureURL": "http://www.gettyimages.com/landing/assets/static_content/home/info-tabs2.jpg"
    },
    {
      "id": "as7923ljksf9832iofwoi",
      "authorId": "s7sd6h87s78h6",
      "userName": "Henry Hass",
      "pictureId": "https://randomuser.me/api/portraits/men/4.jpg",
      "challengedUsers": [
        {
          "userId": "k32j45l3kj5l32kj",
          "status": "waiting..."
        },
        {
          "userId": "k32j4fsdf5l332kj",
          "status": "Done",
          "submissionId": "sdgjsldgf93480"
        },
        {
          "userId": "sfsd45l3kj5l32kj",
          "status": "waiting..."
        }
      ],
      "challengeTypeId": "89ssgs9t0w8s0gsg0",
      "comment": "Dude, that was disgusting!",
      "videoURL": "http://techslides.com/demos/sample-videos/small.mp4",
      "captureURL": "https://theawesomer.com/photos/2012/09/160912_cinnamon_challenge_t.jpg"
    }
  ]
  

  constructor(props) {
    super(props);


    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.challengeList),
    };
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Challenge {...data} />}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // loginAction: (user, pass) => dispatch(loginAction(user, pass)),
});

export default connect(({routes, auth})=>({routes, auth}), mapDispatchToProps)(SpecificChallenge);