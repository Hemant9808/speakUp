import { UserButton } from "@clerk/clerk-react";

const UserDropdown = () => {
  return (
    <div className="flex items-center gap-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default UserDropdown; 