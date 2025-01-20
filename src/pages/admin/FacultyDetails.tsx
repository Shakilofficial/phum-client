import { useParams } from "react-router-dom";
import { useGetFacultyByIdQuery } from "../../redux/features/admin/userManagementApi";

const FacultyDetails = () => {
  const { id } = useParams();
  const { data: facultyData } = useGetFacultyByIdQuery(id as string);
  const data = facultyData?.data;

  return (
    <div className="p-8 bg-gradient-to-r from-green-50 to-green-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {data ? (
          <>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Faculty Details
            </h1>
            <div className="flex flex-col items-center mb-6">
              <img
                src={data.profileImg}
                alt={data.fullName}
                className="w-32 h-32 rounded-full object-cover border-4 border-green-300 shadow-md"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mt-2">
                {data.fullName}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-green-600 mb-2">
                  Personal Information
                </h3>
                <p>
                  <strong>Faculty ID:</strong> {data.id}
                </p>
                <p>
                  <strong>Designation:</strong> {data.designation}
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
              <div className="bg-green-50 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-green-600 mb-2">
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
            <div className="bg-green-50 p-4 rounded-lg shadow mt-6">
              <h3 className="font-semibold text-lg text-green-600 mb-2">
                Academic Information
              </h3>
              <p>
                <strong>Faculty:</strong> {data.academicFaculty.name}
              </p>
              <p>
                <strong>Department:</strong> {data.academicDepartment.name}
              </p>
              <p>
                <strong>Emergency Contact:</strong> {data.emergencyContactNo}
              </p>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">
            Loading faculty details...
          </p>
        )}
      </div>
    </div>
  );
};

export default FacultyDetails;
