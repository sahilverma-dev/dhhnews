import { FC } from "react";

import { Tweet } from "react-tweet";

interface Props {
  id: string;
}

const TwitterEmbed: FC<Props> = ({ id }) => {
  return (
    <div className="w-full flex justify-center">
      <Tweet id={id} />
    </div>
  );
};

export default TwitterEmbed;
