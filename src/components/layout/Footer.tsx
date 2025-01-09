import { Layout } from "antd";
const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      ©{new Date().getFullYear()} PH University Management System | Created by
      Md Shakil Hossain
    </Footer>
  );
};

export default MainFooter;
