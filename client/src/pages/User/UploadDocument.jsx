import { useEffect } from "react";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

const UploadDocument = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const userStatus = auth?.user?.status;

  useEffect(() => {
    if (userStatus !== "Approved") 
      navigate("/dashboard/user");
  }, [auth?.token, userStatus]);

  return <h1>Upload document here</h1>;
};

export default UploadDocument;
