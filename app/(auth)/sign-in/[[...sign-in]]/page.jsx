import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
};
export default Login;
