import { SportCardType, SpotlightType } from "@/types.dt"
export const sports: SportCardType[] = [{
  id: 1,
  img: "/images/sports1.png",
  heading: "Sacramento River Cats",
  totalEvent: "48 Events",
  sports: "Baseball",
  isAdd: false,
}, {
  id: 2,
  img: "/images/sports2.png",
  heading: "Las Vegas Aviators",
  totalEvent: "28 Events",
  sports: "Baseball",
  isAdd: false,
}, {
  id: 3,
  img: "/images/sports3.png",
  heading: "New jersey devils",
  totalEvent: "15 Events",
  sports: "Ice Hockey",
  isAdd: false,
}, {
  id: 4,
  img: "/images/sports2.png",
  heading: "Las Vegas Aviators",
  totalEvent: "28 Events",
  sports: "Baseball",
  isAdd: false,
}, {
  id: 5,
  img: "/images/add.png",
  heading: "Advertisement title",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  isAdd: true,
}]

export const spotlights: SpotlightType[] = [
  {
    img: "/images/spotlight1.png",
    heading: "Las Vegas Aviators",
    timestamp: "Oct 15 | Sun | 4:30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    buttonText: "Take Flight Collection"
  }, {
    img: "/images/spotlight2.png",
    heading: "Sacramento River Cats",
    timestamp: "Oct 15 | Sun | 4:30 PM",
    location: "Sutter Health Park, Sacramento, California",
    buttonText: "Orange Collection"
  }, {
    img: "/images/spotlight1.png",
    heading: "Las Vegas Aviators",
    timestamp: "Oct 15 | Sun | 4:30 PM",
    location: "Las Vegas Ballpark, Las Vegas, Nevada",
    buttonText: "Take Flight Collection"
  },
]