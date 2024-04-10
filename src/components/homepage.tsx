import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Button, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { ethers } from "ethers";
import { useEthersSigner } from '../components/adapters'
import FunFundContract from "../../artifacts/contracts/funfund.sol/funfund.json";

export default function Homepage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURI, setImageURI] = useState("");
  const [goal, setGoal] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("")
  const [loading, setLoading] = useState(false);

  const account = useAccount().address;
  const contractAddress = "0xa8Dc528037C7C13fbe5e12f5930D6f0b0016d11F";
  const signer = useEthersSigner()
  console.log(signer)


  const handleCreateCampaign = async () => {
    try {
      setLoading(true);

      const contract = new ethers.Contract(contractAddress, FunFundContract.abi, signer);
      const timestamp = convertToUnixEpoch(date, time);
      console.log("timestprma ", timestamp)

      // Chiamare la funzione createCampaign del contratto
      await contract.createCampaign(title, description, imageURI, goal, timestamp);

      // Resetta i campi del form dopo aver creato la campagna
      setTitle("");
      setDescription("");
      setImageURI("");
      setGoal(0);
      setDate("");
    } catch (error) {
      console.error("Error creating campaign:", error);
    } finally {
      setLoading(false);
    }
  };

  const convertToUnixEpoch = (date: any, time: any) => {
    const selectedDateTime = new Date(`${date}T${time}`);
    return selectedDateTime.getTime() / 1000; // Converti in secondi
  };
  return (
    <div className="grid grid-cols-2 gap-5 text-black flex justify-center">
      <div className="flex justify-center mt-6">
        <span className="text-2xl text-center w-full">CREATE CAMPAIGN</span>
      </div>
      <div className="flex justify-center mt-6">
        <span className="text-2xl text-center w-full">LAST CAMPAIGN</span>
      </div>
      <div className="grid grid-cols-2 gap-5 w-full rounded p-2 border border-black-400 rounded-md shadow-2xl ml-4">
        <div>
          <Input
            className="mt-2"
            type="text"
            placeholder="Campaign Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            className="mt-4"
            type="value"
            placeholder="Goal"
            value={goal.toString()}
            onChange={(e) => setGoal(parseFloat(e.target.value))}
            endContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">ETH</span>
              </div>
            }
          />
          <Input
            type="url"
            className="mt-4"
            placeholder="img_URI"
            labelPlacement="outside"
            value={imageURI}
            onChange={(e) => setImageURI(e.target.value)}
          />
          <Input
            className="mt-4"
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            className="mt-4"
            type="time"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-between">
          <Textarea
            label="Description"
            labelPlacement="outside"
            placeholder="Enter your description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            className="mt-2 self-end"
            color="default"
            onClick={handleCreateCampaign}
            disabled={loading}
          >
            {loading ? "Creating Campaign..." : "Create Campaign"}
          </Button>
        </div>
      </div>
      <div className="">
        <p>test2</p>
      </div>
    </div>
  );
}


