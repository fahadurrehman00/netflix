import AccountSetting from "./accountSetting/AccountSetting";
import UserProfile from "./userProfile/UserProfile";

const userAccount = [
  {
    id: 1,
    userImage: "/images/profile.png",
    userName: "Ali",
  },
  {
    id: 2,
    userImage: "/images/profile.png",
    userName: "Fahad",
  },
  {
    id: 3,
    userImage: "/images/profile1.png",
    userName: "Carla",
  },
  {
    id: 4,
    userImage: "/images/profile.png",
    userName: "Jenifer",
  },
  {
    id: 5,
    userImage: "/images/profile1.png",
    userName: "Tomas",
  },
];
const AccountMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 absolute top-14 right-0 border-2 border-gray-800 flex flex-col rounded-md py-3">
      <div className="flex flex-col gap-3">
        {userAccount.map((user) => (
          <UserProfile key={user.id} user={user} />
        ))}
        <AccountSetting />
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div className="px-3 text-center text-white text-sm hover:underline">
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};
export default AccountMenu;
