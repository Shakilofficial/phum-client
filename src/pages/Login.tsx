import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "fatema.456",
    },
  });

  const [login, { error }] = useLoginMutation();

  const onSubmit = async (data) => {
    const credentials = {
      id: data.userId,
      password: data.password,
    };
    const response = await login(credentials).unwrap();
    const user = verifyToken(response.data.accessToken);
    console.log(user);
    dispatch(setUser({ user: user, token: response.data.accessToken }));
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
