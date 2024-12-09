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
    path: ROUTES.joinus,
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
    path: "",
    subNav: [
      {
        title: "NUSSU Students' Fund",
        path: ROUTES.studentfunds,
      },
      {
        title: "Union Council Funding",
        path: ROUTES.councilfunding,
      },
      {
        title: "NUS Staff Club Students' Resilience Fund",
        path: ROUTES.resiliencefund,
      },
      {
        title: "Requests for Zoom License",
        path: ROUTES.zoomlicense,
      },
      {
        title: "Union Publicity Management",
        path: ROUTES.publicitymanagement,
      },
    ],
  },
  {
    title: "CONTACT",
    path: ROUTES.contact,
  },
];
