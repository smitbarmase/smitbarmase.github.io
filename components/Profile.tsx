import ButtonLarge from "./ButtonLarge";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Profile: React.FC = () => {
  return (
    <div className="flex items-center space-x-5">
      <img
        src="https://ca.slack-edge.com/T01G8FQ1J84-U01G27LCHEZ-5935251b3440-192"
        className="w-28 h-28 rounded-full border border-gray-200"
      />
      <div className="space-y-4">
        <div>
          <div className="font-medium text-2xl">Smit Barmase</div>
          <div className="text-gray-500">
            I build amazing things using algorithms.
          </div>
        </div>
        <div className="flex space-x-2">
          <ButtonLarge link="https://github.com/smitbarmase">
            <FaGithub fontSize={16} className="mr-2" />
            GitHub
          </ButtonLarge>
          <ButtonLarge link="https://www.linkedin.com/in/smitbarmase/">
            <FaLinkedin fontSize={16} className="mr-2" />
            LinkedIn
          </ButtonLarge>
          <ButtonLarge link="https://www.youtube.com/channel/UCNN-8t9vWnL0jydIHMr1KHg">
            <FaYoutube fontSize={16} className="mr-2" />
            YouTube
          </ButtonLarge>
        </div>
      </div>
    </div>
  );
};

export default Profile;
