import { useGetAllAcademicSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemestersQuery(undefined);
  console.log(data);

  return (
    <div>
      <h1>This is the AcademicSemester component</h1>
    </div>
  );
};

export default AcademicSemester;
