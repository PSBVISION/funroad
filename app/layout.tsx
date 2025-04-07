// import type { Metadata } from "next";
// import { Inter, Inter_Tight, Leckerli_One } from "next/font/google";
// import { Libre_Caslon_Text, Libre_Bodoni } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";

// import { Pacifico, Lobster } from "next/font/google";

// const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
// const lobster = Lobster({ weight: "400", subsets: ["latin"] });

// const libreCaslon = Libre_Caslon_Text({
//   weight: ["400", "700"],
//   subsets: ["latin"] ,
//   variable: "--font-libre-caslon-text",
// });

// const libreBodoni = Libre_Bodoni({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-libre-bodoni",
// });

// const interSans = Inter({
//   variable: "--font-inter-sans",
//   subsets: ["latin"],
// });
// const leckerliOne = Leckerli_One({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-leckerli-one",
// });
// const interTight = Inter_Tight({
//   variable: "--font-inter-tight",
//   subsets: ["latin"],
// });

// export { libreCaslon, libreBodoni, pacifico, lobster };

// export const metadata: Metadata = {
//   title: "Puri Literary Festival",
//   description: "puri literary festival",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
//       <body
//         suppressHydrationWarning
//         className={`${interSans.variable} ${interTight.variable} ${leckerliOne.variable} ${libreCaslon.variable} ${libreBodoni.variable} antialiased`}
//       >
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "@/components/Header";

// import {
//   interSans,
//   interTight,
//   leckerliOne,
//   libreCaslon,
//   libreBodoni,
// } from "./font";

// export const metadata: Metadata = {
//   title: "Puri Literary Festival",
//   description: "puri literary festival",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1"
//       ></meta>
//       <body
//         suppressHydrationWarning
//         className={`${interSans.variable} ${interTight.variable} ${leckerliOne.variable} ${libreCaslon.variable} ${libreBodoni.variable} antialiased`}
//       >
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "@/components/Header";
// import {
//   pacifico,
//   lobster,
//   libreCaslon,
//   libreBodoni,
//   interSans,
//   interTight,
//   leckerliOne,
//   ebGaramond, // Import EB Garamond
// } from "./font";

// export const metadata: Metadata = {
//   title: "Puri Literary Festival",
//   description: "puri literary festival",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <body
//         suppressHydrationWarning
//         className={`${interSans.variable} ${interTight.variable} ${leckerliOne.variable} ${libreCaslon.variable} ${libreBodoni.variable} ${pacifico.variable} ${lobster.variable} ${ebGaramond.variable} antialiased`}
//       >
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import {
  pacifico,
  lobster,
  libreCaslon,
  libreBodoni,
  interSans,
  interTight,
  leckerliOne,
  ebGaramond, // Import EB Garamond
} from "./font";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Puri Literary Festival",
  description: "Puri Literary Festival",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${interSans.variable} ${interTight.variable} ${leckerliOne.variable} ${libreCaslon.variable} ${libreBodoni.variable} ${pacifico.variable} ${lobster.variable} ${ebGaramond.variable} antialiased relative`}
      >
        {/* Header Component */}
        <Header />

        {/* Page Content */}
        {children}

        {/* Register Now button (Mobile only) */}
        <div className="sm:block md:hidden fixed left-4 top-1/2 -translate-y-2/3 z-50 -rotate-90 origin-left">
          <Link
            href="/registernow"
            className="bg-[#D72327] text-white font-leckerli py-2 px-6 rounded-lg shadow-lg hover:bg-[#D72327] transition duration-300"
          >
            Register Now
          </Link>
        </div>
      </body>
    </html>
  );
}
