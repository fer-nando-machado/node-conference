const scheduler = require("./scheduler")

describe("schedule talks", () => {
  it("should organize an empty conference", () => {
    const talks = []

    const tracks = scheduler.organize(talks)

    expect(tracks.length).toBe(1)
    expect(tracks[0].talks).toMatchObject([
      { title: "Lunch", start: 720 },
      { title: "Networking Event", start: 1020 },
    ])
  })

  it("should organize a complete two track conference", () => {
    const talks = [
      {
        title: "Writing Fast Tests Against Enterprise Rails",
        duration: 60,
      },
      {
        title: "Overdoing it in Python",
        duration: 45,
      },
      {
        title: "Lua for the Masses",
        duration: 30,
      },
      {
        title: "Ruby Errors from Mismatched Gem Versions",
        duration: 45,
      },
      {
        title: "Common Ruby Errors",
        duration: 45,
      },
      {
        title: "Rails for Python Developers",
        duration: 5,
      },
      {
        title: "Communicating Over Distance",
        duration: 60,
      },
      {
        title: "Accounting-Driven Development",
        duration: 45,
      },
      {
        title: "Woah",
        duration: 30,
      },
      {
        title: "Sit Down and Write",
        duration: 30,
      },
      {
        title: "Pair Programming vs Noise",
        duration: 45,
      },
      {
        title: "Rails Magic",
        duration: 60,
      },
      {
        title: "Ruby on Rails: Why We Should Move On",
        duration: 60,
      },
      {
        title: "Clojure Ate Scala (on my project)",
        duration: 45,
      },
      {
        title: "Programming in the Boondocks of Seattle",
        duration: 30,
      },
      {
        title: "Ruby vs. Clojure for Back-End Development",
        duration: 30,
      },
      {
        title: "Ruby on Rails Legacy App Maintenance",
        duration: 60,
      },
      {
        title: "A World Without HackerNews",
        duration: 30,
      },
      {
        title: "User Interface CSS in Rails Apps",
        duration: 30,
      },
    ]

    const tracks = scheduler.organize(talks)

    expect(tracks.length).toBe(2)
    expect(tracks[0].talks.length).toBe(12)
    expect(tracks[1].talks.length).toBe(11)
  })
})
