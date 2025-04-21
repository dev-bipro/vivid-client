import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

const mockProfile = {
  avatar: "",
  name: "Jane Doe",
  email: "jane.doe@example.com",
};

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-8 mt-10 flex flex-col items-center">
      <div className="mb-6">
        {mockProfile.avatar ? (
          <img
            src={mockProfile.avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-full border-4 border-primary object-cover"
          />
        ) : (
          <span className="w-20 h-20 flex items-center justify-center rounded-full bg-secondary text-primary">
            <UserRound size={48} />
          </span>
        )}
      </div>
      <h2 className="text-xl font-bold mb-2">{mockProfile.name}</h2>
      <p className="text-gray-500 mb-4">{mockProfile.email}</p>
      <Button onClick={() => navigate("/user/profile/edit")}>
        Edit Profile
      </Button>
    </div>
  );
};

export default Profile;
