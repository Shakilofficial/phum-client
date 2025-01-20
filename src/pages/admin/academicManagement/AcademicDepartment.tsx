import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagementApi";
import { TAcademicDepartment } from "../../../types/academicManagement";
import { TQueryParam } from "../../../types/global";

export type TTableData = Pick<TAcademicDepartment, "_id" | "name"> & {
  faculty: string;
};

const AcademicDepartment = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);

  const {
    data: departmentData,
    isLoading,
    isFetching,
  } = useGetAllAcademicDepartmentsQuery([
    { name: "page", value: page },
    { name: "sort", value: "name" },
    { name: "limit", value: 2 },
    ...params,
  ]);

  const metaData = departmentData?.meta;

  // Transform department data for the table
  const tableData: TTableData[] =
    departmentData?.data?.map(({ _id, name, academicFaculty }) => ({
      key: _id,
      _id,
      name,
      faculty: academicFaculty?.name || "N/A",
    })) || [];

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Department Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
    },
    {
      title: "Faculty Name",
      dataIndex: "faculty",
      key: "faculty",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => (
        <Space>
          <Link to={`/admin/academic-departments/${item.key}`}>
            <Button type="primary">Update</Button>
          </Link>
        </Space>
      ),
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <>
      <Table
        loading={isFetching || isLoading}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        style={{ marginTop: "20px" }}
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default AcademicDepartment;
