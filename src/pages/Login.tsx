import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { TUser } from "../types";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const defaultValues = {
    userId: "A-0002",
    password: "fatema.456",
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const credentials = {
        id: data.userId,
        password: data.password,
      };
      const response = await login(credentials).unwrap();
      const user = verifyToken(response.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: response.data.accessToken }));
      toast.success("Logged in successfully", { id: toastId });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Invalid credentials", { id: toastId });
    }
  };

  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        height: "100vh",
      }}
    >
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID :" />
        <PHInput type="text" name="password" label="Password :" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
