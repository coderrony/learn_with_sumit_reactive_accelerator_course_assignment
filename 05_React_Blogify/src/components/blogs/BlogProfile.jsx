import { avatarPath } from "../../utils";
import getFirstLetter from "../../utils/getFirstLetter";

function BlogProfile({ avatar, firstName, bgColor }) {
  const profileAvatar = avatar ? (
    <img
      className="w-10 h-10 rounded-full mx-auto"
      src={`${avatarPath}/${avatar}`}
      alt={firstName}
    />
  ) : (
    <div className={`avater-img ${bgColor} text-white`}>
      <span>{getFirstLetter(firstName)}</span>
    </div>
  );
  return <>{profileAvatar}</>;
}

export default BlogProfile;
