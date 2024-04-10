"use client"
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Button, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { ethers } from "hardhat";

export default async function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const account = useAccount().address;
  useEffect(() => {
    if (account) {
      console.log(account);
    } else {
      console.log("f");
    }
  }, [account]);

  const contractAddress = "0xa8Dc528037C7C13fbe5e12f5930D6f0b0016d11F";
  const myContract = await ethers.getContractAt("funfund", contractAddress);
  const [campaignTitle, setCampaignTitle] = useState("");
  const [goal, setGoal] = useState(0)
  const [imgURI, setImgURI] = useState("");
  const [date, setDate] = useState(0)
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      // Chiamata alla funzione del contratto con i dati raccolti
      await myContract.createCampaign(campaignTitle, goal, imgURI, date, description);
      console.log("Campagna creata con successo!");
      // Puoi fare altro dopo l'invio dei dati, come pulire i campi del modulo
      setCampaignTitle("");
      setGoal(0);
      setImgURI("");
      setDate(0);
      setDescription("");
    } catch (error) {
      console.error("Errore durante la creazione della campagna:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-5 text-black flex justify-center">
        <div className="flex justify-center mt-6">
          <span className="text-2xl text-center w-full">CREATE CAMPAIGN</span>
        </div>
        <div className="flex justify-center mt-6">
          <span className="text-2xl text-center w-full">LAST CAMPAIGN</span>
        </div>
        <div className="grid grid-cols-2 gap-5 w-full rounded p-2 border border-black-400 rounded-md shadow-2xl ml-4">
          <div>
            <Input className="mt-2" type="string" placeholder="Campaign Title" value={campaignTitle}
              onChange={(e) => setCampaignTitle(e.target.value)}/>
            <Input className="mt-4" type="value" placeholder="Goal" value={goal.toString()}
              onChange={(e) => setGoal(parseFloat(e.target.value))} endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">ETH</span>
            </div> } />
            <Input
          type="url"
          className="mt-4"
          placeholder="img_URI"
          labelPlacement="outside"
          value={imgURI}
              onChange={(e) => setImgURI(e.target.value)}
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">file://</span>
            </div>
          }
         
        />
            <Input className="mt-4" type="date" placeholder="Date"  value={date.toString()}
              onChange={(e) => {const selectedDate = new Date(e.target.value);
                if (!isNaN(selectedDate.getTime())) {
                    // Se la data è valida, convertila in un timestamp UNIX epoch
                    setDate(selectedDate.getTime());
                  } else {
                    // Se la data non è valida, impostala su un valore vuoto o gestisci l'errore in modo appropriato
                    setDate(0); // Imposta la data su un valore vuoto
                    console.error("Data non valida"); // Gestisci l'errore in modo appropriato
                  }
              }}/>
          </div>
          <div className="flex flex-col justify-between">
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button className="mt-2 self-end" onClick={handleSubmit} color="default">senmd</Button>
          </div>
        </div>
        <div className="">
          <p>test2</p>
        </div>
      </div>
    </>
  );
}
