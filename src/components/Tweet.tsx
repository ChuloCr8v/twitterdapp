import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import useShortenWalletAddress from "../hooks/useShortenWalletAddress";
import dayjs from "dayjs";

type Props = {
  data: any;
  connectedAccount: string;
};

const Tweet = ({ data, connectedAccount }: Props) => {
  const { shortenedAddress } = useShortenWalletAddress(connectedAccount);

  console.log(data.timestamp);
  return (
    <div className="tweet w-full flex flex-col gap-3 items-start border-b border-teal-800 p-4">
      <p className="text-gray-400">{shortenedAddress} </p>

      <p className="text-xl">{data.tweet}</p>

      <p className="text-gray-400 text-xs -mt-2">
        {dayjs(Number(data.timestamp)).format("DD:MM:YYYY h-m-s")}
      </p>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <FaThumbsUp />
          {Number(data.likes)}
        </div>
        <div className="flex items-center gap-2">
          <FaThumbsDown /> {Number(data.dislikes)}
        </div>
      </div>
    </div>
  );
};

export default Tweet;
