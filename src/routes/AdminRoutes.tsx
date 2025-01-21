import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminDetails from "../pages/admin/AdminDetails";
import AdminLists from "../pages/admin/AdminLists";
import Courses from "../pages/admin/courseManagement/Courses";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import OfferedCourse from "../pages/admin/courseManagement/OfferedCourse";
import RegisteredSemesters from "../pages/admin/courseManagement/RegisteredSemesters";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import FacultyDetails from "../pages/admin/FacultyDetails";
import FacultyLists from "../pages/admin/FacultyLists";
import StudentDetails from "../pages/admin/StudentDetails";
import StudentLists from "../pages/admin/StudentLists";
import UserLists from "../pages/admin/UserLists";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create Academic Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create Academic Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create Academic Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "All Users",
        path: "all-users",
        element: <UserLists />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "All Admins",
        path: "all-admins",
        element: <AdminLists />,
      },
      {
        path: "all-admins/:id",
        element: <AdminDetails />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "All Faculties",
        path: "all-faculties",
        element: <FacultyLists />,
      },
      {
        path: "all-faculties/:id",
        element: <FacultyDetails />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "All Students",
        path: "all-students",
        element: <StudentLists />,
      },
      {
        path: "all-students/:id",
        element: <StudentDetails />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Registered Semesters",
        path: "registered-semesters",
        element: <RegisteredSemesters />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses />,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
      {
        name: "Offered Courses",
        path: "offered-courses",
        element: <OfferedCourse />,
      },
    ],
  },
];

// create utility function for bellow codes

/* // dynaamic way to do it
export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item?.path && item?.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item?.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []); */

/* export const adminSideBarItems = adminPaths.reduce(
  (acc: TSideBarItem[], item) => {
    if (item?.path && item?.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item?.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {
          return {
            key: child.name,
            label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
          };
        }),
      });
    }
    return acc;
  },
  []
); */

//hardcoded way to do it
/* export const AdminPaths = [
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
]; */
