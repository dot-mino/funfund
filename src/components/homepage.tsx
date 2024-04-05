import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Input } from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

export default function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const account = useAccount().address;
  useEffect(() => {
    if (account) {
      console.log(account);
    } else {
      console.log("f");
    }
  }, [account]);

  return (
    <>
      {account ? (
        <div className="flex justify-center mt-12 text-black">
          <div className="w-2/3 rounded p-4  rounded-md ">
            <div>
              <div className="flex items-center ">
                <span className="text-3xl text-center w-full">START HERE</span>
              </div>
              <hr className="border-b border-gray-300 my-4" />

              <div className="flex justify-center mt-1">
                <div className="w-2/3 rounded p-4 border border-black-400 rounded-md shadow-md">
                  <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                      type="string"
                      color="primary"
                      placeholder="Campaign Title"
                    />
                    <Textarea
                      type="string"
                      color="primary"
                      placeholder="Description"
                    />
                     <Input
                      type="url"
                      color="primary"
                      placeholder="Image URI"
                    />
                  </div>
                  <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-4">
                  <Input
                      type="value"
                      color="primary"
                      placeholder="Goal in ETH"
                    />
                    <Input
                      type="date"
                      color="primary"
                      placeholder="Date"
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-12 text-black">
          <div className="w-2/3 rounded p-4  rounded-md ">
            <div>
              <div className="flex items-center ">
                <span className="text-3xl text-center w-full">
                  NON STARTARE HERE
                </span>
              </div>
              <hr className="border-b border-gray-300 my-4" />
              <div className="flex justify-center mt-4"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
