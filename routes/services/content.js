const express = require("express")
const app = express.Router()


app.get("/api/pages/fortnite-game", async (req, res) => {
    var season
    if (req.headers["user-agent"]) {
        try {
            season = req.headers["user-agent"].split("-")[1].split(".")[0]
            if (season == 10) season = "x"
        } catch {
            season = 2
        }
    } else season = 2

    res.json({
        "jcr:isCheckedOut": true,
        _title: "Fortnite Game",
        "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
        _activeDate: "2017-08-30T03:20:48.050Z",
        lastModified: new Date(),
        _locale: "en-US",
        battleroyalenewsv2: {
            news: {
                motds: [
                    {
                        entryType: "Text",
                        image: "https://cdn.discordapp.com/attachments/826020881411211294/850971593828073532/Aurora_In-Game.jpg",
                        tileImage: "https://cdn.discordapp.com/attachments/826020881411211294/850971593828073532/Aurora_In-Game.jpg",
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "Aurora +",
                        _type: "CommonUI Simple Message MOTD",
                        title: "Aurora",
                        body: "Welcome to Aurora +! Made by Jazz.",
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 0,
                        id: `Aurora-News-0`,
                        spotlight: false
                    }
                ]
            }
        },
        emergencynoticev2: {
            news: {
                platform_messages: [],
                _type: "Battle Royale News",
                messages: [
                    {
                        hidden: false,
                        _type: "CommonUI Simple Message Base",
                        subgame: "br",
                        body: "Aurora",
                        title: "Welcome to Aurora +! Made by Jazz.",
                        spotlight: true
                    }
                ]
            },
            _title: "emergencynotice",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
        dynamicbackgrounds: {
            "jcr:isCheckedOut": true,
            backgrounds: {
                backgrounds: [
                    {
                        "backgroundimage": "https://cdn.discordapp.com/attachments/826020881411211294/850971593828073532/Aurora_In-Game.jpg",
                        stage: `season15xmas`,
                        _type: "DynamicBackground",
                        key: "lobby"
                    },
                    {
                        "backgroundimage": "https://cdn.discordapp.com/attachments/826020881411211294/850971593828073532/Aurora_In-Game.jpg",
                        stage: `season15xmas`,
                        _type: "DynamicBackground",
                        key: "vault"
                    }
                ],
                "_type": "DynamicBackgroundList"
            },
            _title: "dynamicbackgrounds",
            _noIndex: false,
            "jcr:baseVersion": "a7ca237317f1e71f17852c-bccd-4be6-89a0-1bb52672a444",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        }
    })
})


module.exports = app