import store from "store";
// export const isAuth = () => !!store.get("token");

  if (!isLoggedIn()) {
    return <Redirect to="/signin" />;
  }
