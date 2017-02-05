/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class MapContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MapContainer component</Text>
      </View>
    );
  }
}
}

function mapStateToProps(state: any): void {
  return {
      user: state.user,
  };
}

function mapDispatchToProps(dispatch: any): void {
  return { Actions: bindActionCreators(ActionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
