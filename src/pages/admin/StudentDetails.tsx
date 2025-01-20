import { useParams } from "react-router-dom";
import { useGetStudentByIdQuery } from "../../redux/features/admin/userManagementApi";

const StudentDetails = () => {
  const { id } = useParams();
  const { data: studentData } = useGetStudentByIdQuery(id as string);
  const data = studentData?.data;

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {data ? (
          <>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Student Details
            </h1>
            <div className="flex flex-col items-center mb-6">
              <img
                src={data.profileImg}
                alt={data.fullName}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-300 shadow-md"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mt-2">
                {data.fullName}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-blue-600 mb-2">
                  Personal Information
                </h3>
                <p>
                  <strong>Student ID:</strong> {data.id}
                </p>
                <p>
                  <strong>Gender:</strong> {data.gender}
                </p>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {new Date(data.dateOfBirth).toLocaleDateString()}
                </p>
                <p>
                  <strong>Blood Group:</strong> {data.bloodGroup}
                </p>
                <p>
                  <strong>Contact:</strong> {data.contactNo}
                </p>
                <p>
                  <strong>Email:</strong> {data.email}
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-blue-600 mb-2">
                  Addresses
                </h3>
                <p>
                  <strong>Present Address:</strong> {data.presentAddress}
                </p>
                <p>
                  <strong>Permanent Address:</strong> {data.permanentAddress}
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow mt-6">
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                Guardian Information
              </h3>
              <p>
                <strong>Father's Name:</strong> {data.guardian.fatherName}
              </p>
              <p>
                <strong>Father's Occupation:</strong>{" "}
                {data.guardian.fatherOccupation}
              </p>
              <p>
                <strong>Father's Contact:</strong>{" "}
                {data.guardian.fatherContactNo}
              </p>
              <p>
                <strong>Mother's Name:</strong> {data.guardian.motherName}
              </p>
              <p>
                <strong>Mother's Occupation:</strong>{" "}
                {data.guardian.motherOccupation}
              </p>
              <p>
                <strong>Emergency Contact:</strong> {data.emergencyContactNo}
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow mt-6">
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                Academic Information
              </h3>
              <p>
                <strong>Department:</strong> {data.academicDepartment.name}
              </p>
              <p>
                <strong>Admission Semester:</strong>{" "}
                {data.admissionSemester.name} - {data.admissionSemester.year}
              </p>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">
            Loading student details...
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;
