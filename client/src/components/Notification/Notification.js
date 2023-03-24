import { useSelector } from "react-redux";
import { Alert } from "@chakra-ui/react";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  if (notification === null) return null;

  return <Alert severity={notification.type}>{notification.message}</Alert>;
};

export default Notification;
