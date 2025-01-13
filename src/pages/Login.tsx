import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { TUser } from "../types";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "fatema.456",
    },
  });

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
      toast.success("Logged in successfully", { id: toastId, duration: 3000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Invalid credentials", { id: toastId, duration: 3000 });
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID: </label>
          <input type="text" id="id" {...register("userId")} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
