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

import Submission from '../components/submission.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  }
});

class MySubmission extends React.Component {
  challengeList = 
  [
    {
      "id": "as7923ljksf9832iofwoi",
      "authorId": "s7sd6h87s78h6",
      "pictureId": "https://randomuser.me/api/portraits/men/13.jpg",
      "challengedUsers": [
        {
          "userId": "k32j45l3kj5l32kj",
          "userPic": "https://theawesomer.com/photos/2012/09/160912_cinnamon_challenge_t.jpg",
          "userName": "Arol Vinolas",
          "status": "waiting..."
        },
        {
          "userId": "k32j4fsdf5l332kj",
          "userPic": "https://randomuser.me/api/portraits/men/4.jpg",
          "userName": "Ian Salt",
          "status": "Done",
          "submissionId": "sdgjsldgf93480"
        },
        {
          "userId": "sfsd45l3kj5l32kj",
          "userPic": "http://www.oneillinstituteblog.org/wp-content/uploads/2015/07/140819-ice-bucket-challenge-1949_899e03e1c58b45b56812f96bc79680a6.jpg",
          "userName": "Ruben Sanz",
          "status": "waiting..."
        }
      ],
      "challengeTypeId": "89ssgs9t0w8s0gsg0",
      "challengeName": "Boot Camp Challenge",
      "comment": "Dude, that was disgusting!",
      "videoURL": "http://techslides.com/demos/sample-videos/small.mp4",
      "captureURL": "http://www.gettyimages.com/landing/assets/static_content/home/info-tabs2.jpg"
    },
    {
      "id": "as7923ljksf9832iofwoi",
      "authorId": "s7sd6h87s78h6",
      "pictureId": "https://randomuser.me/api/portraits/men/4.jpg",
      "challengedUsers": [
        {
          "userId": "k32j45l3kj5l32kj",
          "userPic": "http://www.gettyimages.com/landing/assets/static_content/home/info-tabs2.jpg",
          "userName": "Alex Zannardi",
          "status": "waiting..."
        },
        {
          "userId": "k32j4fsdf5l332kj",
          "userPic": "https://randomuser.me/api/portraits/men/4.jpg",
          "userName": "Ann Lee",
          "status": "Done",
          "submissionId": "sdgjsldgf93480"
        },
        {
          "userId": "sfsd45l3kj5l32kj",
          "userPic": "http://www.oneillinstituteblog.org/wp-content/uploads/2015/07/140819-ice-bucket-challenge-1949_899e03e1c58b45b56812f96bc79680a6.jpg",
          "userName": "Jack Soros",
          "status": "waiting..."
        }
      ],
      "challengeTypeId": "89ssgs9t0w8s0gsg0",
      "challengeName": "Coffee Challenge",
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
        renderRow={(data) => <Submission {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // loginAction: (user, pass) => dispatch(loginAction(user, pass)),
});

export default connect(({routes, auth})=>({routes, auth}), mapDispatchToProps)(MySubmission);