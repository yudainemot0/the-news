import React, { SVGProps } from "react";

interface Props {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  title: string;
}

export default function HeaderRow({ Icon, title }: Props) {
  return (
    <div>
      <Icon className="w-6 h-6 mx-auto md:w-7 md:h-7" />
      <p className="hidden sm:inline-block sm:text-sm md:text-base pt-1">{title}</p>
    </div>
  );
}
