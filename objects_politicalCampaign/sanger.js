const sanger = {
    district: "21st District",
    platform: {
        taxes: "Lower taxes",
        jobs: "Create more jobs",
        infrastructure: "Stabilize infrastructure",
        healthcare: "More affordable healthcare",
        crime: "Decrease crime rate"
    },
    donationURL: "http://esanger.com/donate",
    calendar: [
        {
            event: "Rally for Elizabeth Sanger",
            date: "10/22/2018",
            location: "Nashville, TN",
        },
        {
            event: "Election Day",
            date: "11/6/2018",
            location: "Nationwide",
        }
    ],
    volunteer: [
        {
            name: "John Smith",
            address: "123 Test St, Nashville, TN 37210",
            email: "jsmith@test.com",
            phone: "555-555-5555",
            availability: ["Afternoons", "Evenings", "Weekends"],
            activities: ["inbound phone calls", "taking polls"]
        },
        {
            name: "Barbara Kline",
            address: "555 Tester Ave, Nashville, TN 37210",
            email: "barbiek@test.com",
            phone: "555-555-6262",
            availability: ["Mornings", "Afternoons", "Weekends"],
            activities: ["inbound phone calls", "outbound phone calls", "taking polls", "door-to-door"]
        },
        {
            name: "Tom Johnson",
            address: "1000 Test Valley Rd, Nashville, TN 37210",
            email: "tom.johnson@test.com",
            phone: "555-555-1234",
            availability: ["Weekends"],
            activities: ["inbound phone calls", "outbound phone calls", "door-to-door"]
        }
    ],
    biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [
        {
            headshot: "http://esanger.com/headshot.jpg",
            family: "http://esanger.com/family.jpg",
            constituents: "http://esanger.com/constituents.jpg",
        }
    ],
    mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    registerURL: "https://www.usa.gov/register-to-vote"
}


console.log(sanger.volunteer[1].name);