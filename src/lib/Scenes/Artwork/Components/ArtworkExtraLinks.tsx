import { Sans, Spacer } from "@artsy/palette"
import { ArtworkExtraLinks_artwork } from "__generated__/ArtworkExtraLinks_artwork.graphql"
import SwitchBoard from "lib/NativeModules/SwitchBoard"
import { Router } from "lib/utils/router"
import { Schema, track } from "lib/utils/track"
import React from "react"
import { Text } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"

export interface ArtworkExtraLinksProps {
  artwork: ArtworkExtraLinks_artwork
}

@track()
export class ArtworkExtraLinks extends React.Component<ArtworkExtraLinksProps> {
  handleReadOurFAQTap = () => {
    SwitchBoard.presentNavigationViewController(this, `/buy-now-feature-faq`)
  }

  handleAskASpecialistTap = () => {
    const { artwork } = this.props
    SwitchBoard.presentNavigationViewController(this, `/inquiry/${artwork.slug}`)
  }

  handleReadOurAuctionFAQsTap = () => {
    // FIXME: Add auction FAQs navigation here
  }

  handleConditionsOfSaleTap = () => {
    SwitchBoard.presentNavigationViewController(this, `/conditions-of-sale`)
  }

  @track(() => {
    return {
      action_name: Schema.ActionNames.ConsignWithArtsy,
      action_type: Schema.ActionTypes.Tap,
      context_module: Schema.ContextModules.ArtworkExtraLinks,
    } as any
  })
  handleConsignmentsTap() {
    SwitchBoard.presentNavigationViewController(this, Router.ConsignmentsStartSubmission)
  }

  renderFAQAndSpecialist = () => {
    const {
      artwork: { isAcquireable, isInquireable, isInAuction, sale },
    } = this.props

    if (isInAuction && sale && !sale.isClosed) {
      // FIXME: Verify logic when to show Auction "ask a specialist"
      return (
        <>
          <Sans size="2" color="black60">
            By placing a bid you agree to Artsy's{" "}
            <Text style={{ textDecorationLine: "underline" }} onPress={() => this.handleConditionsOfSaleTap()}>
              Conditions of Sale
            </Text>
            .
          </Sans>
          <Spacer mb={1} />
          <Sans size="2" color="black60">
            Have a question?{" "}
            <Text style={{ textDecorationLine: "underline" }} onPress={() => this.handleReadOurAuctionFAQsTap()}>
              Read our auction FAQs
            </Text>{" "}
            or{" "}
            <Text style={{ textDecorationLine: "underline" }} onPress={() => this.handleAskASpecialistTap()}>
              ask a specialist
            </Text>
            .
          </Sans>
        </>
      )
    } else if (isInquireable || isAcquireable) {
      return (
        <Sans size="2" color="black60">
          Have a question?{" "}
          <Text style={{ textDecorationLine: "underline" }} onPress={() => this.handleReadOurFAQTap()}>
            Read our FAQ
          </Text>
          {isAcquireable && (
            <>
              {" "}
              or{" "}
              <Text style={{ textDecorationLine: "underline" }} onPress={() => this.handleAskASpecialistTap()}>
                ask a specialist
              </Text>
              .
            </>
          )}
        </Sans>
      )
    }
  }

  render() {
    const {
      artwork: { artists },
    } = this.props
    const consignableArtistsCount = artists.filter(artist => artist.isConsignable).length
    const artistName = artists && artists.length === 1 ? artists[0].name : null

    return (
      <>
        {this.renderFAQAndSpecialist()}
        {!!consignableArtistsCount && (
          <Sans size="2" color="black60">
            Want to sell a work by {consignableArtistsCount === 1 ? artistName : "these artists"}?{" "}
            <Text style={{ textDecorationLine: "underline" }} onPress={() => this.handleConsignmentsTap()}>
              Consign with Artsy.
            </Text>
          </Sans>
        )}
      </>
    )
  }
}

export const ArtworkExtraLinksFragmentContainer = createFragmentContainer(ArtworkExtraLinks, {
  artwork: graphql`
    fragment ArtworkExtraLinks_artwork on Artwork {
      slug
      isAcquireable
      isInquireable
      isInAuction
      sale {
        isClosed
      }
      artists {
        isConsignable
        name
      }
    }
  `,
})
