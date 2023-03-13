import { Routes as ROUTES } from "./routes.js";

export const navs = [
  {
    title: "ABOUT US",
    path: ROUTES.aboutUs,
    subNav: [
      {
        title: "GOVERNANCE",
        path: ROUTES.governance,
      },
      {
        title: "HISTORY",
        path: ROUTES.history,
      },
      {
        title: "OUR TEAM",
        path: ROUTES.ourTeam,
      },
      {
        title: "PRESIDENT'S MESSAGE",
        path: ROUTES.presidentMessage,
      },
    ],
  },
  {
    title: "JOIN US",
    path: ROUTES.index,
  },
  {
    title: "OUR WORK",
    path: ROUTES.ourWork,
  },
  {
    title: "EVENTS",
    path: ROUTES.events,
  },
  {
    title: "FRESHMEN",
    path: ROUTES.freshmen,
  },
  {
    title: "SERVICES",
    path: ROUTES.services,
  },
  {
    title: "CONTACT",
    path: ROUTES.contact,
  },
];
