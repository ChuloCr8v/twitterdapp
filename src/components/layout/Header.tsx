import { Avatar } from "antd";
import { BsTwitterX } from "react-icons/bs";
import { FaBan, FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import useConnectAccount from "../../hooks/useConnectAccount";
import useShortenWalletAddress from "../../hooks/useShortenWalletAddress";
import { logOut } from "../../redux/authSlice";

const Header = () => {
  const { connectedAccount } = useConnectAccount();
  const { shortenedAddress } = useShortenWalletAddress(connectedAccount);

  const dispatch = useDispatch();

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex flex-col items-center justify-center p-6">
      <div className="max-w-7xl w-full flex items-center justify-between">
        {" "}
        <h2 className="font-semibold  text-xl flex items-center gap-2">
          <BsTwitterX className="text-teal-500 text-xl " /> Twitter Dapp
        </h2>
        {connectedAccount ? (
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2">
              <Avatar
                className="h-6 w-6"
                icon={<FaUser className="text-5xl text-teal-500" />}
              />{" "}
              <span className="text-sm"> {shortenedAddress}</span>
            </p>
            <LuLogOut
              className="text-xl hover:text-teal-500 duration-150"
              onClick={() => {
                dispatch(logOut());
              }}
            />
          </div>
        ) : (
          <p className="flex items-center gap-1 text-sm">
            <FaBan className="ml-1 mt-0.5 text-xs text-red-500" />
            No Accounted connected
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
