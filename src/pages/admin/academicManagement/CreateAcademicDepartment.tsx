import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Row, Typography } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import {
  useCreateAcademicDepartmentMutation,
  useGetAllAcademicFacultiesQuery,
} from "../../../redux/features/admin/academicManagementApi";
import { academicDepartmentSchema } from "../../../schemas/academicManagement/academicManagementSchema";
import { TResponse } from "../../../types/global";

const { Title } = Typography;

const CreateAcademicDepartment = () => {
  const [createAcademicDepartment] = useCreateAcademicDepartmentMutation();
  const { data: facultyData } = useGetAllAcademicFacultiesQuery(undefined);

  // Transform faculty data into select options
  const facultyOptions = facultyData?.data?.map((faculty) => ({
    value: faculty._id,
    label: faculty.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const departmentData = {
      name: formData.name,
      academicFaculty: formData.academicFaculty,
    };

    const toastId = toast.loading("Creating academic department...");

    try {
      const response = (await createAcademicDepartment(
        departmentData
      )) as TResponse;
      if (response.error) {
        toast.error(response.error.data.message, { id: toastId });
      } else {
        toast.success("Academic department created successfully!", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error("An unexpected error occurred.", { id: toastId });
    }
  };

  return (
    <Row justify="center" align="top" style={{ minHeight: "100vh" }}>
      <Col xs={24} sm={16} md={12} lg={8} xl={6}>
        <Title
          level={3}
          style={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          Create Academic Department
        </Title>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <PHSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={facultyOptions}
          />
          <PHInput type="text" label="Department Name" name="name" />
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{ marginTop: "1rem" }}
          >
            Submit
          </Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateAcademicDepartment;
