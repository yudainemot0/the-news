import {
  PresentationChartLineIcon,
  NewspaperIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  BeakerIcon,
  IdentificationIcon,
  TrophyIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import HeaderRow from "./HeaderRow";
import Image from "next/image";

export default function Header() {
  return (
    <div className="border-b border-b-slate-900">
      <Image
        className="w-28 sm:w-36 md:w-60 h-auto mx-auto mt-4"
        width={500}
        height={500}
        src="/Logo.png"
        alt=""
      />
      <div className="flex justify-around items-center mt-3 mb-1 mx-auto max-w-7xl">
        <div className="flex space-x-3 sm:space-x-6 md:space-x-10">
          <HeaderRow Icon={GlobeAltIcon} title="TOP" />
          <HeaderRow Icon={NewspaperIcon} title="General" />
          <HeaderRow Icon={ComputerDesktopIcon} title="Tecnology" />
          <HeaderRow Icon={PresentationChartLineIcon} title="Business" />
          <HeaderRow Icon={BeakerIcon} title="Science" />
          <HeaderRow Icon={IdentificationIcon} title="Health" />
          <HeaderRow Icon={TrophyIcon} title="Sports" />
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 p-1 sm:p-3 rounded-full">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search News"
            className="flex-1 outline-none bg-transparent text-xs sm:text-base"
          />
        </div>
      </div>
    </div>
  );
}
