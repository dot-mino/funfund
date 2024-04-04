// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract funfund {
    address private immutable owner;

    constructor() {
        owner = msg.sender;
    }

    Campaign[] public campaigns;

    struct Campaign {
        uint256 id;
        address creator;
        string title;
        string desc;
        string img;
        uint256 goal;
        uint256 endAt;
        Status _status;
        address[] donors;
        uint256[] donorsContribution;
        uint256 amountCollected;
    }

    enum Status {
        Active,
        Pending,
        Success,
        Deleted
    }

    uint256 public campaignID = 0;

    function createCampaign(
        string memory _title,
        string memory _desc,
        string memory _img,
        uint256 _goal,
        uint256 _endAt
    ) external {
        require(bytes(_title).length > 0, "Title must not be empty");
        require(bytes(_desc).length > 0, "Description must not be empty");
        require(bytes(_img).length > 0, "Image URI must not be empty");
        require(_goal > 0, "Goal > zero");
        require(_endAt >= block.timestamp, "Ends time > now");

        campaigns.push(
            Campaign(
                campaignID++,
                msg.sender,
                _title,
                _desc,
                _img,
                _goal,
                _endAt,
                Status.Active,
                new address[](0),
                new uint256[](0),
                0
            )
        );
    }

    function donateCampagin(uint256 _id) external payable {
        require(msg.value > 0, "Donation amount > 0");
        Campaign storage campaignSelected = campaigns[_id];
        require(
            campaignSelected._status == Status.Active ||
                campaignSelected._status == Status.Pending,
            "Not Active or Pending"
        );
        uint remainingFund = campaignSelected.goal -
            campaignSelected.amountCollected;

        if (msg.value <= remainingFund) {
            campaignSelected.donors.push(msg.sender);
            campaignSelected.donorsContribution.push(msg.value);
            campaignSelected.amountCollected += msg.value;
        } else {
            uint excessAmount = msg.value - remainingFund; //ritorna
            payable(msg.sender).transfer(excessAmount);
            uint rest = msg.value - excessAmount;
            campaignSelected.donors.push(msg.sender);
            campaignSelected.donorsContribution.push(rest);
            campaignSelected.amountCollected += rest;
        }

        if (campaignSelected.amountCollected == campaignSelected.goal) {
            campaignSelected._status = Status.Success;
        } else if (campaignSelected.amountCollected < campaignSelected.goal) {
            campaignSelected._status = Status.Pending;
        }
    }

    function deleteCampaigns(uint256 _id) external {
        Campaign storage campaignSelected = campaigns[_id];
        require(
            campaignSelected.creator == msg.sender || owner == msg.sender,
            "not owner or creator"
        );
        require(block.timestamp >= campaignSelected.endAt, "not finished");
        refund(campaignSelected.id);
        campaignSelected._status = Status.Deleted;
    }

    function refund(uint _id) internal {
        Campaign storage campaignSelected = campaigns[_id];
        if (campaignSelected.amountCollected > 0) {
            for (uint i = 0; i < campaignSelected.donors.length; i++) {
                address _donors = campaignSelected.donors[i];
                uint _amount = campaignSelected.donorsContribution[i];
                payable(_donors).transfer(_amount);
                campaignSelected.amountCollected -= _amount;
            }
        }
    }

    function getAllCampaigns() public view returns (Campaign[] memory) {
        return campaigns;
    }

    function getCampaignDetails(
        uint256 _id
    )
        public
        view
        returns (
            uint256 id,
            address creator,
            string memory title,
            string memory desc,
            string memory img,
            uint256 goal,
            uint256 endAt,
            Status _status,
            address[] memory donors,
            uint256[] memory donorsContribution,
            uint256 amountCollected
        )
    {
        Campaign storage campaignSelected = campaigns[_id];
        return (
            campaignSelected.id,
            campaignSelected.creator,
            campaignSelected.title,
            campaignSelected.desc,
            campaignSelected.img,
            campaignSelected.goal,
            campaignSelected.endAt,
            campaignSelected._status,
            campaignSelected.donors,
            campaignSelected.donorsContribution,
            campaignSelected.amountCollected
        );
    }

    function getTotalContributions(uint256 _id) public view returns (uint256) {
        return campaigns[_id].amountCollected;
    }

    function getContributionsByAddress(
        uint256 _id,
        address donors
    ) public view returns (uint256) {
        Campaign storage campaignSelected = campaigns[_id];
        uint amount = 0;
        for (uint i = 0; i < campaignSelected.donors.length; i++) {
            if (campaignSelected.donors[i] == donors) {
                amount += campaignSelected.donorsContribution[i];
            }
        }
        return amount;
    }
}
