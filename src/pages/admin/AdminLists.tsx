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
import { useGetAllAdminsQuery } from "../../redux/features/admin/userManagementApi";
import { TQueryParam } from "../../types/global";
import { TAdmin } from "../../types/userManagement.type";

export type TTableData = Pick<
  TAdmin,
  "fullName" | "id" | "email" | "contactNo" | "designation"
>;

const AdminLists = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: adminData,
    isLoading,
    isFetching,
  } = useGetAllAdminsQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    { name: "limit", value: 2 },
    ...params,
  ]);

  console.log({ isLoading, isFetching });

  const metaData = adminData?.meta;

  const tableData = adminData?.data?.map(
    ({ _id, fullName, id, email, contactNo, designation }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
      designation,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "fullName",
    },
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Designation",
      key: "designation",
      dataIndex: "designation",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Contact No.",
      key: "contactNo",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/all-admins/${item.key}`}>
              <Button>Details</Button>
            </Link>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
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
        loading={isFetching}
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

export default AdminLists;
