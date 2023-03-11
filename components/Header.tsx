import {
  PresentationChartLineIcon,
  NewspaperIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  TrophyIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import HeaderRow from "./HeaderRow";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <Image
        className="w-28 sm:w-36 md:w-48 h-auto mx-auto mt-4"
        width={50}
        height={50}
        src="/Logo.png"
        alt=""
      />
      <div className="flex justify-around items-center mt-3">
        <div className="flex">
          <HeaderRow Icon={GlobeAltIcon} title="TOP" />
          <HeaderRow Icon={NewspaperIcon} title="Business" />
          <HeaderRow Icon={ComputerDesktopIcon} title="Tecnology" />
          <HeaderRow Icon={PresentationChartLineIcon} title="Market" />
          <HeaderRow Icon={TrophyIcon} title="Sports" />
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search News"
            className="flex-1 outline-none bg-transparent"
          />
        </div>
      </div>
    </>
  );
}
