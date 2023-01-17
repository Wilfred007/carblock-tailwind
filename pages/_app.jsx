import '../styles/globals.css'
import { BlockchainProvider } from './context/BlockchainContext'
import Navigation from "../components/Navigation"
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";


// function MyApp({ Component, pageProps }) {
//   return (
  
//     <div className='h-full bg-white'>
//      <BlockchainProvider>
//       <Navigation />
//       <Component {...pageProps} />
//       </BlockchainProvider>
//     </div>
//   )
// } 

const alchemyId = "fqPim3iU6u59SV5vBuP-nprpdDUWsg_U"

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  }),
);

const MyApp = ({ Component, pageProps }) => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
      <div className='h-full bg-white'>
     <BlockchainProvider>
      <Navigation />
      <Component {...pageProps} />
      </BlockchainProvider>

    </div>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default MyApp
