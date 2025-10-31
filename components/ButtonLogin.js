import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, extraStyle}) => {
  if (isLoggedIn) {
    return (
      <Link href="/daschboard" className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}>
        Welcome back {name}
      </Link>
    );
  }
  return <button>Login</button>;
};

export default ButtonLogin;
