import React, { SVGProps } from "react";

interface Props {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  title: string;
}

export default function HeaderRow({ Icon, title }: Props) {
  return (
    <div>
      <Icon className="w-6 h-6 mx-auto sm:w-6 sm:h-6 md:w-10 md:h-10" />
      <p className="hidden sm:inline-block md:text-lg">{title}</p>
    </div>
  );
}
