// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract funfund {
    address private immutable owner;
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
        Unsuccess,
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
        Campaign storage campaignSelected = campaigns[_id];
        campaignSelected.donors.push(msg.sender);
        campaignSelected.donorsContribution.push(msg.value);
        campaignSelected.amountCollected += msg.value;
    }

    function deleteCampaigns(uint256 _id) external {
        Campaign storage campaignSelected = campaigns[_id];
        require(campaignSelected.creator == msg.sender);
        campaignSelected._status = Status.Deleted;
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
