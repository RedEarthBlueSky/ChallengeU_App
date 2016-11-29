import React, { Component } from 'react';
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

import Grid from '../components/grid.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  }
});

class ChallengesScreen extends React.Component {

  challengesList = [
    {
      "name": "Ice bucket challenge",
      "pic": "http://www.oneillinstituteblog.org/wp-content/uploads/2015/07/140819-ice-bucket-challenge-1949_899e03e1c58b45b56812f96bc79680a6.jpg",
      "views": 150
    },
    {
      "name": "Cinamonn challenge",
      "pic": "http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg",
      "views": 50
    },
    {
      "name": "Coffee challenge",
      "pic": "http://7606-presscdn-0-74.pagely.netdna-cdn.com/wp-content/uploads/2016/03/Dubai-Photos-Images-Travel-Tourist-Images-Pictures-800x600.jpg",
      "views": 20
    },
    {
      "name": "Rounded challenge",
      "pic": "http://www.gettyimages.com/landing/assets/static_content/home/info-tabs2.jpg",
      "views": 150
    },
    {
      "name": "Alcohol challenge",
      "pic": "http://www.gettyimages.com/gi-resources/images/Editorial-Images/Entertainment.jpg",
      "views": 50
    },
    {
      "name": "Boot camp challenge",
      "pic": "http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/03/ultraviolet_image_shows_the_sun_s_intricate_atmosphere/15891756-1-eng-GB/Ultraviolet_image_shows_the_Sun_s_intricate_atmosphere_node_full_image_2.jpg",
      "views": 20
    },
  ]

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.challengesList),
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Grid {...data} />}
      />
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  // loginAction: (user, pass) => dispatch(loginAction(user, pass)),
});

export default connect(({routes, auth})=>({routes, auth}), mapDispatchToProps)(ChallengesScreen);