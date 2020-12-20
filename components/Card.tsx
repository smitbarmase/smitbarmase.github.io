import Button from "./Button";

import { DiGithubBadge } from "react-icons/di";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import { BsPlayFill } from "react-icons/bs";

import CardInterface from "../interface/CardInterface";

interface CardProps extends CardInterface {
  isPlayStore?: boolean;
}

const Card: React.FC<CardProps> = (props) => {
  const { title, img, live, visit, createdAt, info, tags, isPlayStore } = props;
  return (
    <div className="bg-white rounded shadow overflow-hidden transition-shadow hover:shadow-md">
      <div className="p-3 space-y-3">
        <div className="flex space-x-3">
          <img src={img} alt={title} className="h-28 w-28 rounded" />
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="font-medium text-sm">{title}</div>
              <div className="text-xs text-gray-600">{info}</div>
            </div>
            <div className="flex justify-end space-x-2">
              {live && (
                <Button link={live}>
                  <BsPlayFill fontSize={20} className="mr-1" />
                  Live
                </Button>
              )}
              {isPlayStore ? (
                <Button link={visit}>
                  <IoLogoGooglePlaystore fontSize={16} className="m-1 mr-2" />
                  Play Store
                </Button>
              ) : (
                <Button link={visit}>
                  <DiGithubBadge fontSize={22} className="mr-1" />
                  GitHub
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="inline-block text-xs text-gray-600 bg-gray-50 border border-gray-200 py-1 px-3 rounded-full cursor-default hover:bg-gray-100"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
