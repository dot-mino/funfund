import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Button, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { ethers } from "ethers";
import { useEthersSigner } from '../components/adapters'
import { useEthersProvider } from '../components/adapters'
import FunFundContract from "../../artifacts/contracts/funfund.sol/funfund.json";
enum CampaignStatus {
  Active = 0,
  Expired = 1,
  Success = 2,
  Failed = 3
}

interface Campaign {
  id: number;
  creator: string;
  title: string;
  desc: string;
  img: string;
  goal: number;
  endAt: number;
  _status: CampaignStatus; // Puoi definire un tipo enum se lo hai definito nel contratto
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
  const [time, setTime] = useState("")
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [campaignsLoaded, setCampaignsLoaded] = useState(false);

  const account = useAccount().address;
  const contractAddress = "0x08e2e20e32e3774bee4c02fbecf2b455f85a57fa";
  const signer = useEthersSigner()
  const provider = useEthersProvider()
  
  useEffect(() => {
    getAllCampaigns(); // Carica tutte le campagne al caricamento della pagina
  }, []);

  const checkCampaignExpiry = async () => {
  try {
    const contract = new ethers.Contract(contractAddress, FunFundContract.abi, signer);

    // Ottenere la data corrente in Unix Epoch
    const currentUnixTime = Math.floor(Date.now() / 1000);

    // Controlla tutte le campagne per verificare se sono scadute
    for (const campaign of campaigns) {
      if (campaign._status === CampaignStatus.Active && currentUnixTime > campaign.endAt) {
        // Aggiorna lo stato della campagna a "Expired" sul contratto
        await contract.updateCampaignStatus(campaign.id, CampaignStatus.Expired);
        
        // Aggiorna lo stato locale della campagna come "Expired"
        setCampaigns(prevCampaigns => prevCampaigns.map(prevCampaign => {
          if (prevCampaign.id === campaign.id) {
            return {...prevCampaign, _status: CampaignStatus.Expired};
          }
          return prevCampaign;
        }));
      }
    }
  } catch (error) {
    console.error("Error checking campaign expiry:", error);
  }
};

// Esegui la funzione checkCampaignExpiry quando la lista delle campagne viene caricata o quando si aggiunge una nuova campagna
useEffect(() => {
  getAllCampaigns(); // Carica tutte le campagne al caricamento della pagina
  checkCampaignExpiry(); // Controlla se le campagne sono scadute
}, [campaignsLoaded, loading]);

// Aggiorna la funzione handleCreateCampaign per controllare le campagne scadute quando viene creata una nuova campagna
const handleCreateCampaign = async () => {
  try {
    setLoading(true);

    const contract = new ethers.Contract(contractAddress, FunFundContract.abi, signer);
    const timestamp = convertToUnixEpoch(date, time);

    // Chiamare la funzione createCampaign del contratto
    await contract.createCampaign(title, description, imageURI, goal, timestamp);

    // Controlla le campagne scadute
    await checkCampaignExpiry();

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


  const getAllCampaigns = async () => {
    try {
      const contract = new ethers.Contract(contractAddress, FunFundContract.abi, provider);

      // Chiamare la funzione getAllCampaigns del contratto
      const campaignList = await contract.getAllCampaigns();

      // Aggiorna lo stato locale con la lista di campagne ottenuta dal contratto
      setCampaigns(campaignList);
      setCampaignsLoaded(true);
    } catch (error) {
      console.error("Error receiving campaign:", error);
    }
  };

  const convertToUnixEpoch = (date: any, time: any) => {
    const selectedDateTime = new Date(`${date}T${time}`);
    return selectedDateTime.getTime() / 1000; // Converti in secondi
  };
  function unixEpochToDateTime(unixEpoch : any) {
    // Crea un oggetto Date utilizzando il timestamp Unix Epoch
    const date = new Date(unixEpoch * 1000); // Moltiplica per 1000 per convertire da secondi a millisecondi
  
    // Estrai giorno, mese, anno, ore e minuti dall'oggetto Date
    const day = date.getDate();
    const month = date.getMonth() + 1; // I mesi sono indicizzati da 0 a 11, quindi aggiungi 1
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Formatta la data e l'ora in una stringa leggibile
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
  
    return formattedDateTime;
  }
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
        <Button
          className="mt-2 self-end"
          color="default"
          onClick={getAllCampaigns}
          disabled={loading}
        >
          Get All Campaigns
        </Button>
        {/* Visualizza le campagne */}
        {campaignsLoaded && campaigns.map((campaign, index) =>  (
          <div key={index} className="mt-4 p-4 border border-gray-200 rounded">
            <h2>Title: {campaign.title}</h2>
            <p>Description: {campaign.desc}</p>
            <p>Goal: {campaign.goal.toString()} ETH</p>
            <p>Image : {campaign.img}</p>
            <p>EndTime : {unixEpochToDateTime(campaign.endAt.toString())}</p>
            <p>Status : {CampaignStatus[campaign._status]} </p>
            {/* Altri campi della campagna */}
          </div>
        ))}
      </div>
    </div>
  );
}


