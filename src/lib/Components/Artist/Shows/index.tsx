import React from "react"
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"

import Separator from "../../Separator"
import SerifText from "../../Text/Serif"
import SmallList from "./SmallList"
import VariableSizeShowsList from "./VariableSizeShowsList"

import { Shows_artist } from "__generated__/Shows_artist.graphql"

interface Props {
  artist: Shows_artist
}

class Shows extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {this.currentAndUpcomingList()}
        {this.pastShows()}
      </View>
    )
  }

  pastShows() {
    const pastShows = this.props.artist.pastLargeShows || this.props.artist.pastSmallShows
    if (pastShows.edges.length) {
      return (
        <View>
          <Separator style={{ marginBottom: 20 }} />
          <SerifText style={styles.title}>Past Shows</SerifText>
          {this.pastShowsList()}
        </View>
      )
    } else {
      return null
    }
  }

  pastShowsList() {
    // TODO: Use `this.props.relay.getVariables().isPad` when this gets merged: https://github.com/facebook/relay/pull/1868
    if (this.props.artist.pastLargeShows) {
      return (
        <VariableSizeShowsList
          showSize={"medium"}
          shows={this.props.artist.pastLargeShows.edges.map(({ node }) => node)}
        />
      )
    } else {
      return (
        <SmallList
          shows={this.props.artist.pastSmallShows.edges.map(({ node }) => node)}
          style={{ marginTop: -8, marginBottom: 50 }}
        />
      )
    }
  }

  currentAndUpcomingList() {
    const currentShows = this.props.artist.currentShows.edges.map(({ node }) => node)
    const upcomingShows = this.props.artist.upcomingShows.edges.map(({ node }) => node)
    if (currentShows.length || upcomingShows.length) {
      const shows = [...currentShows, ...upcomingShows]
      return (
        <View style={{ marginBottom: 20 }}>
          <SerifText style={styles.title}>Current & Upcoming Shows</SerifText>
          <VariableSizeShowsList showSize={"large"} shows={shows} />
        </View>
      )
    }
  }
}

interface Styles {
  container: ViewStyle
  title: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 0,
  },
})

export default createFragmentContainer(Shows, {
  artist: graphql`
    fragment Shows_artist on Artist {
      currentShows: showsConnection(status: "running", first: 10) {
        edges {
          node {
            ...VariableSizeShowsList_shows
          }
        }
      }
      upcomingShows: showsConnection(status: "upcoming", first: 10) {
        edges {
          node {
            ...VariableSizeShowsList_shows
          }
        }
      }
      pastSmallShows: showsConnection(status: "closed", first: 20) @skip(if: $isPad) {
        edges {
          node {
            ...SmallList_shows
          }
        }
      }
      pastLargeShows: showsConnection(status: "closed", first: 20) @include(if: $isPad) {
        edges {
          node {
            ...VariableSizeShowsList_shows
          }
        }
      }
    }
  `,
})
