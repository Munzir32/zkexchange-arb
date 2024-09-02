import "@rainbow-me/rainbowkit/styles.css";
import "~~/styles/globals.css";
import Layout from "~~/components/Layout"
import Providers from "~~/providers/provider";
// import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

// export const metadata = getMetadata({
//   title: "Scaffold-ETH 2 App",
//   description: "Built with 🏗 Scaffold-ETH 2",
// });

// const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html suppressHydrationWarning>
//       <body>
//         <ThemeProvider enableSystem>
//           <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// };

// export default ScaffoldEthApp;

function App({ Component, pageProps }) {

  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Providers>
      </body>
    </html>
  );
}

export default App;