import { useParams } from "react-router-dom";
import { useGetStudentByIdQuery } from "../../redux/features/admin/userManagementApi";

const StudentDetails = () => {
  const { id } = useParams();
  const { data: studentData } = useGetStudentByIdQuery(id as string);
  const data = studentData?.data;
  console.log(data);

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      {data ? (
        <>
          <h1 className="text-2xl font-bold mb-4">
            Student Details: {data.fullName}
          </h1>
          <img
            src={data.profileImg}
            alt={data.fullName}
            className="w-32 h-32 rounded-full object-cover mb-6"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="font-semibold">Personal Information</h2>
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
            <div>
              <h2 className="font-semibold">Addresses</h2>
              <p>
                <strong>Present Address:</strong> {data.presentAddress}
              </p>
              <p>
                <strong>Permanent Address:</strong> {data.permanentAddress}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold">Guardian Information</h2>
            <p>
              <strong>Father's Name:</strong> {data.guardian.fatherName}
            </p>
            <p>
              <strong>Father's Occupation:</strong>{" "}
              {data.guardian.fatherOccupation}
            </p>
            <p>
              <strong>Father's Contact:</strong> {data.guardian.fatherContactNo}
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
          <div className="mt-4">
            <h2 className="font-semibold">Academic Information</h2>
            <p>
              <strong>Department:</strong> {data.academicDepartment.name}
            </p>
            <p>
              <strong>Admission Semester:</strong> {data.admissionSemester.name}{" "}
              - {data.admissionSemester.year}
            </p>
          </div>
        </>
      ) : (
        <p>Loading student details...</p>
      )}
    </div>
  );
};

export default StudentDetails;
