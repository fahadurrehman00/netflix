import { FaRegBell } from "react-icons/fa6";

const NotificationButton = () => {
  return (
    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
      <FaRegBell className="text-xl" />
    </div>
  );
};
export default NotificationButton;
