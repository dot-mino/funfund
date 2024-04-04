// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract funfund {
    address private immutable owner;
 
    struct Campaign{
        address creator;
        string title;
        string desc;
        string img;
        uint goal;
        uint endAt;
        address[] donators;
        uint amountCollected;
        Status _status;
    }

    enum Status {
        Active,
        Pending,
        Success,
        Unsuccess,
        Delete
    }
    
    mapping (uint => Campaign) public campaigns;
    uint public campaignID = 0;

   
   function createCampaign(string memory _title, string memory _desc, string memory _img, uint _goal, uint _endAt) external  returns(uint) {
    Campaign storage campaign = campaigns[campaignID];

    campaign.creator = msg.sender;
    campaign.title = _title;
    campaign.desc = _desc;
    campaign.img = _img;
    campaign.goal = _goal;
    campaign.endAt = _endAt;
    campaign._status = Status.Active;
    return campaignID++;
   }

   function donateCampagin(uint _id)external payable{
    Campaign storage campaignSelected = campaigns[_id];
    campaignSelected.amountCollected += msg.value;
    campaignSelected.donators.push(msg.sender);
   }

   function returnDonators(uint _id) external view returns (address[] memory) {
    Campaign storage campaignSelected = campaigns[_id];
    return campaignSelected.donators;
}

    function deleteCampaigns(uint _id) external {
    delete campaigns[_id];
    }

    function refundDonation(uint _id) external {
    
    }
    
}
