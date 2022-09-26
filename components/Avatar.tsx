import MUIAvatar from "@mui/material/Avatar";

interface AvatarProps {
  group: "bot" | "client";
}

const Avatar = ({ group }: AvatarProps) => {
  const isBot = group === "bot";
  return (
    <MUIAvatar sx={{ bgcolor: isBot ? "#CD5C5C" : "#40E0D0" }}>
      {isBot ? "A" : "C"}
    </MUIAvatar>
  );
};

export default Avatar;
