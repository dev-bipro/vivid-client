import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { UserRoundPen } from "lucide-react";

const existingProfile = {
  avatar: "",
  name: "Jane Doe",
  email: "jane.doe@example.com",
};

const EditProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(existingProfile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate back (no backend hooked up)
    navigate("/user/profile");
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-8 mt-10">
      <div className="flex flex-col items-center mb-6">
        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-full border-4 border-primary object-cover mb-2"
          />
        ) : (
          <span className="w-20 h-20 flex items-center justify-center rounded-full bg-secondary text-primary mb-2">
            <UserRoundPen size={40} />
          </span>
        )}
        <div className="text-primary font-bold">Edit Profile</div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Your Email"
            type="email"
            required
          />
        </div>
        <div className="flex gap-3">
          <Button type="submit" className="flex-1">
            Save Changes
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="flex-1"
            onClick={() => navigate("/user/profile")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
