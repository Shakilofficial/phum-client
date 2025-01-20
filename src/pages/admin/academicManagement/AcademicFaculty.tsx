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
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagementApi";
import { TAcademicFaculty } from "../../../types/academicManagement";
import { TQueryParam } from "../../../types/global";

export type TTableData = Pick<TAcademicFaculty, "name" | "_id">;

const AcademicFaculty = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);

  const {
    data: facultyData,
    isLoading,
    isFetching,
  } = useGetAllAcademicFacultiesQuery([
    { name: "page", value: page },
    { name: "sort", value: "name" },

    ...params,
  ]);

  const metaData = facultyData?.meta;

  const tableData = facultyData?.data?.map(({ _id, name }) => ({
    key: _id,
    _id,
    name,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Faculty Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => (
        <Space>
          <Link to={`/admin/academic-faculties/${item.key}`}>
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

export default AcademicFaculty;
