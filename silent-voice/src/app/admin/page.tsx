import Head from "next/head";
import { Poppins } from "next/font/google";

import Link from "next/link";



const poppins = Poppins({ weight: ["400", "600", "800"], subsets: ["latin"] });

const AdminPage = () => {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>

      <div className={`${poppins.className} min-h-screen bg-box`}>
       <h2>Hellllllooooooo</h2>
      </div>
    </>
  );
};

export default AdminPage;
