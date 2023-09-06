import { getInstagramId } from "@/lib/utils";

import { FC } from "react";
interface Props {
  url: string;
}

const InstagramEmbed: FC<Props> = ({ url }) => {
  const src = `${url}embed`;
  return (
    <iframe
      src={src}
      allowTransparency
      allowFullScreen
      height={868}
      className="bg-white dark:bg-black w-full max-w-[540px] rounded border block mx-auto min-w-[326px] mb-2 md:mb-4"
    />
  );
};

export default InstagramEmbed;
