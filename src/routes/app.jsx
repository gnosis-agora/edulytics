import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Student from "views/Student/Student.jsx";
import CourseInstructor from "views/CourseInstructor/CourseInstructor.jsx";
import CohortAdministrator from "views/CohortAdministrator/CohortAdministrator.jsx";
import SystemAdministrator from "views/SystemAdministrator/SystemAdministrator.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/student",
    sidebarName: "Student",
    navbarName: "Student",
    icon: Dashboard,
    component: Student
  },
  {
    path: "/courseInstructor",
    sidebarName: "Course Instructor",
    navbarName: "Course Instructor",
    icon: Dashboard,
    component: CourseInstructor
  },
  {
    path: "/cohortAdministrator",
    sidebarName: "Cohort Administrator",
    navbarName: "Cohort Administrator",
    icon: Dashboard,
    component: CohortAdministrator
  },
  {
    path: "/systemAdministrator",
    sidebarName: "System Administrator",
    navbarName: "System Administrator",
    icon: Dashboard,
    component: SystemAdministrator
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
