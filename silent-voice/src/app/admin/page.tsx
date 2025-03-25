"use client"
import Navbar from "@/components/navbar";
import Head from "next/head";
import { Poppins } from "next/font/google";

import { userUserLoaded, useUser } from "@/hooks/user";
import Link from "next/link";

const poppins = Poppins({ weight: ["400", "600", "800"], subsets: ["latin"] });

const AdminPage = () => {
  const [user, setUser] = useUser();
  const [userLoaded, setUserLoaded] = userUserLoaded();

  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>

      <div className={`${poppins.className} min-h-screen bg-box`}>
        <Navbar />
        {user?.role !== "admin" ? (
          <div className="bg-red-500 text-white text-center py-2">
            You are not authorized to access this page
          </div>
        ) : (
          <>
            <div className="max-w-7xl mx-auto px-4 py-24">
              <div className="relative flex flex-col items-center rounded-[20px] mx-auto p-4 bg-white bg-clip-border shadow-md mb-6 mt-12">
                <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
                  <div
                    className={
                      "bg-gradient-to-bl from-[#5BCBF1] to-[#b3e2f1] h-32 w-full rounded-lg flex items-center justify-center"
                    }
                  >
                    <h1 className="text-2xl font-semibold">Admin Dashobard</h1>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AdminPage;
