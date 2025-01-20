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
import { useGetAllUsersQuery } from "../../redux/features/admin/userManagementApi";
import { TQueryParam } from "../../types/global";
import { TUser } from "../../types/userManagement.type";

export type TTableData = Pick<TUser, "id" | "email" | "role" | "status">;

const UserLists = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: userData,
    isLoading,
    isFetching,
  } = useGetAllUsersQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
    { name: "limit", value: 10 },
    ...params,
  ]);

  const metaData = userData?.meta;
  console.log({ isLoading });
  const tableData = userData?.data?.map(({ _id, id, email, role, status }) => ({
    key: _id,
    id,
    email,
    role,
    status,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "User ID",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/all-users/${item.key}`}>
              <Button>Details</Button>
            </Link>
            <Button>Edit</Button>
            <Button>Remove</Button>
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

      filters.role?.forEach((item) =>
        queryParams.push({ name: "role", value: item })
      );

      filters.status?.forEach((item) =>
        queryParams.push({ name: "status", value: item })
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

export default UserLists;
