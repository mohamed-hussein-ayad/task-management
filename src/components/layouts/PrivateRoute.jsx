/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../utils/firebase.config";
import { setUser, toggleState } from "../../redux/features/user/userSlice";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { email, isLoading } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
          })
        );
        dispatch(toggleState(false));
      } else {
        dispatch(toggleState(false));
      }
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
