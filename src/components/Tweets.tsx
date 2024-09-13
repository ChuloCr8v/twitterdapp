import dayjs from "dayjs";
import useConnectAccount from "../hooks/useConnectAccount";
import useGetTweets from "../hooks/useGetTweets";
import Tweet from "./Tweet";
import { VscLoading } from "react-icons/vsc";

const Tweets = () => {
  const { connectedAccount } = useConnectAccount();
  const { tweets, isGettingTweets } = useGetTweets();

  if (isGettingTweets) {
    return <VscLoading className="animate-spin" />;
  }

  if (!connectedAccount) {
    return;
  }

  return (
    <div className=" max-w-2xl w-full flex flex-col items-center justify-start overflow-y-scroll py-24 min-h-screen h-full">
      <div className="w-full border-b pb-2 px-8 lg:px-4 fixed flex items-center justify-between max-w-2xl top-0 bg-[#242424] pt-24 lg:pt-16">
        <h2 className="text-left text-teal-500 font-semibold text-xl">
          Recent Tweets
        </h2>

        <p className="">
          {dayjs(new Date().getTime()).format("dddd, DD:MM:YY")}
        </p>
      </div>

      <div className="w-full py-8">
        {tweets.map((data: any) => (
          <Tweet
            data={data}
            key={data.id}
            connectedAccount={connectedAccount}
          />
        ))}
      </div>
    </div>
  );
};

export default Tweets;
