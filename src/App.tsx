import { VscLoading } from "react-icons/vsc";
import "./App.css";
import ConnectAccount from "./components/ConnectAccount";
import Form from "./components/Form";
import Header from "./components/layout/Header";
import Tweets from "./components/Tweets";
import useConnectAccount from "./hooks/useConnectAccount";

declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

export const contractAddress = "0xd5624ff2E9a44Af9a33fd1A9567611e05F5940fc";

function App() {
  const { connectingAccount } = useConnectAccount();

  if (connectingAccount) {
    return <VscLoading className="animate-spin" />;
  }

  return (
    <main className="w-screen h-screen overflow-y-hidden font-sans flex flex-col items-center justify-center">
      <Header />
      <Tweets />
      <ConnectAccount />
      <Form />
    </main>
  );
}

export default App;
