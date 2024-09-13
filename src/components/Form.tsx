import { Button } from "antd";
import { BsArrowUpCircleFill } from "react-icons/bs";
import useAddTweet from "../hooks/useAddTweet";
import useConnectAccount from "../hooks/useConnectAccount";
import Footer from "./layout/Footer";

const Form = () => {
  const { tweet, setTweet, addTweet, addingTweet } = useAddTweet();
  const { connectedAccount } = useConnectAccount();

  if (connectedAccount === "") {
    return;
  }

  return (
    <div className="fixed px-4 bottom-0 w-full flex flex-col items-center justify-center gap-2 pb-5 bg-[#242424]">
      <form
        action=""
        className="max-w-2xl w-full flex items-center justify-end "
      >
        <input
          type="text"
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
          className="bg-[#2f2f2f] focus:outline-none focus:!bg-[#2f2f2f] hover:!bg-[#2f2f2f] rounded-full text-teal-400 border-none hover:!outline-none hover:!border-none px-4 pl-6 py-3 w-full"
        />
        <Button
          loading={addingTweet}
          disabled={!tweet || addingTweet}
          onClick={() => addTweet()}
          icon={
            <BsArrowUpCircleFill className="text-3xl hover:text-teal-600" />
          }
          className="absolute w-fit px-0 rounded-full bg-transparent border-none text-white hover:!bg-transparent mr-4"
        ></Button>
      </form>

      <Footer />
    </div>
  );
};

export default Form;
