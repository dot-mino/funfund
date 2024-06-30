import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Button, Input, Textarea } from "@nextui-org/react";
import { ethers } from "ethers";
import { useEthersSigner, useEthersProvider } from '../components/adapters';
import FunFundContract from "../../artifacts/contracts/funfund.sol/funfund.json";

enum CampaignStatus {
  Active = 0,
  Deleted = 1,
  Success = 2
}

interface Campaign {
  id: number;
  creator: string;
  title: string;
  desc: string;
  img: string;
  goal: number;
  endAt: number;
  _status: CampaignStatus;
  donors: string[];
  donorsContribution: number[];
  amountCollected: number;
}

export default function Homepage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURI, setImageURI] = useState("");
  const [goal, setGoal] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [campaignsLoaded, setCampaignsLoaded] = useState(false);
  const [etherGoal, setEtherGoal] = useState("");

  const account = useAccount().address;
  const contractAddress = "0x2A934ff3360784Db29e2170d06A08CBEc6EE5484";
  const signer = useEthersSigner();
  const provider = useEthersProvider();

  useEffect(() => {
    getAllCampaigns();
    checkCampaignExpiry();
  }, []);

  const checkCampaignExpiry = async () => {
    try {
      const contract = new ethers.Contract(contractAddress, FunFundContract.abi, signer);
      const currentUnixTime = Math.floor(Date.now() / 1000);
      for (const campaign of campaigns) {
        if (campaign._status == CampaignStatus.Active && currentUnixTime > campaign.endAt) {
          await contract.externalChangeStatus(campaign.id, CampaignStatus.Deleted);
        }
      }
    } catch (error) {
      console.error("Error checking campaign expiry:", error);
    }
  };

  useEffect(() => {
    getAllCampaigns();
    checkCampaignExpiry();
  }, [campaignsLoaded, loading]);

  const handleCreateCampaign = async () => {
    try {
      setLoading(true);

      const contract = new ethers.Contract(contractAddress, FunFundContract.abi, signer);
      const timestamp = convertToUnixEpoch(date, time);
      const goalInWei = ethers.parseEther(etherGoal);

      await contract.createCampaign(title, description, imageURI, goalInWei, timestamp);

      setTitle("");
      setDescription("");
      setImageURI("");
      setEtherGoal(""); // Reset the ether goal field
      setDate("");
    } catch (error) {
      console.error("Error creating campaign:", error);
    } finally {
      setLoading(false);
    }
  };

  const getAllCampaigns = async () => {
    try {
      const contract = new ethers.Contract(contractAddress, FunFundContract.abi, provider);

      const campaignList = await contract.getAllCampaigns();

      setCampaigns(campaignList);
      setCampaignsLoaded(true);
    } catch (error) {
      console.error("Error receiving campaign:", error);
    }
  };

  const convertToUnixEpoch = (date: any, time: any) => {
    const selectedDateTime = new Date(`${date}T${time}`);
    return selectedDateTime.getTime() / 1000;
  };

  const unixEpochToDateTime = (unixEpoch: any) => {
    const date = new Date(unixEpoch * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;

    return formattedDateTime;
  };

  return (
    <div className="flex h-full justify-center items-stretch bg-gray-100 p-6">
      <div className="flex flex-col w-1/2 p-6 border border-gray-300 rounded-md shadow-xl bg-white mr-6">
        <div className="flex justify-center mt-6">
          <span className="text-2xl text-center w-full text-gray-800">CREATE CAMPAIGN</span>
        </div>
        <div className="flex flex-col items-center gap-5 mt-4">
          <div className="w-full max-w-md">
            <Input
              className="mt-2 text-gray-800"
              type="text"
              placeholder="Campaign Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              className="mt-4 text-gray-800"
              type="text"
              placeholder="Goal in Ether"
              value={etherGoal}
              onChange={(e) => setEtherGoal(e.target.value)}
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-gray-500"> ETH </span>
                </div>
              }
            />
            <Input
              type="url"
              className="mt-4 text-gray-800"
              placeholder="img_URI"
              labelPlacement="outside"
              value={imageURI}
              onChange={(e) => setImageURI(e.target.value)}
            />
            <Input
              className="mt-4 text-gray-800"
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Input
              className="mt-4 text-gray-800"
              type="time"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <Textarea
              className="mt-4 text-gray-800"
              placeholder="Enter your description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              className="mt-4 self-end bg-gray-800 text-white"
              onClick={handleCreateCampaign}
              disabled={loading}
            >
              {loading ? "Creating Campaign..." : "Create Campaign"}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 p-6 border border-gray-300 rounded-md shadow-xl bg-white mr-6">
        <div className="flex justify-center mt-6">
          <span className="text-2xl text-center w-full text-gray-800">LAST CAMPAIGN</span>
        </div>
        <div className="flex flex-col items-center gap-4 mt-4">
          {campaignsLoaded && campaigns.map((campaign, index) => (
            <div key={index} className="w-full max-w-md mt-4 p-4 border border-gray-300 rounded bg-white text-gray-800 shadow">
              <h2 className="text-gray-800">Title: {campaign.title}</h2>
              <p className="text-gray-800">Description: {campaign.desc}</p>
              <p className="text-gray-800">Goal: {ethers.formatEther(campaign.goal.toString())} ETH</p>
              <p className="text-gray-800">Image: {campaign.img}</p>
              <p className="text-gray-800">EndTime: {unixEpochToDateTime(campaign.endAt.toString())}</p>
              <p className="text-gray-800">Status: {CampaignStatus[campaign._status]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
