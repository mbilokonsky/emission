import { Theme, TimeRemaining } from "@artsy/palette"
import { mount } from "enzyme"
import { ArtworkFixture } from "lib/__fixtures__/ArtworkFixture"
import { Settings } from "luxon"
import React from "react"
import { AuctionCountDownTimer } from "../AuctionCountDownTimer"

const realNow = Settings.now
const realDefaultZone = Settings.defaultZoneName

describe("AuctionCountDownTimer", () => {
  beforeAll(() => {
    Settings.defaultZoneName = "America/New_York"
    Settings.now = () => new Date("2019-08-15T12:00:00+00:00").valueOf()
  })

  afterAll(() => {
    Settings.now = realNow
    Settings.defaultZoneName = realDefaultZone
  })

  it("renders formattedStartDateTime", () => {
    const artwork = {
      ...ArtworkFixture,
      ...{
        sale: {
          startAt: "2019-08-15T19:22:00+00:00",
          endAt: "2019-08-16T20:20:00+00:00",
          liveStartAt: null,
          formattedStartDateTime: "Ends Aug 16 at 8:20pm UTC",
        },
      },
    }
    const component = mount(
      <Theme>
        <AuctionCountDownTimer artwork={artwork} />
      </Theme>
    )
    expect(component.find(TimeRemaining).text()).toContain("Ends Aug 16 at 8:20pm UTC")
  })

  it("renders the correct countdown time", () => {
    const artwork = {
      ...ArtworkFixture,
      ...{
        sale: {
          startAt: "2019-08-15T19:22:00+00:00",
          endAt: "2019-08-16T20:20:00+00:00",
          liveStartAt: null,
          formattedStartDateTime: "Ends Aug 16 at 8:20pm UTC",
        },
      },
    }
    const component = mount(
      <Theme>
        <AuctionCountDownTimer artwork={artwork} />
      </Theme>
    )
    expect(component.find(TimeRemaining).text()).toContain("01d 08h 20m 00s")
  })

  it("doesn't render if sale is null", () => {
    const artwork = {
      ...ArtworkFixture,
      ...{
        sale: null,
      },
    }
    const component = mount(
      <Theme>
        <AuctionCountDownTimer artwork={artwork} />
      </Theme>
    )
    expect(component.find(TimeRemaining).length).toEqual(0)
  })
})
