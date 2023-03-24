import { useSelector } from "react-redux";
import { Alert, AlertIcon, CloseButton } from "@chakra-ui/react";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  if (notification === null) return null;

  return (
    <Alert status={notification.type} mb={4} borderRadius="md">
      <AlertIcon />
      {notification.message}
      <CloseButton position="absolute" right="8px" top="8px" onClick={() => null} />
    </Alert>
  );
};

export default Notification;
