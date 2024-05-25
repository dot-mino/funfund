/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Funfund, FunfundInterface } from "../Funfund";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "campaignID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "campaigns",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "desc",
        type: "string",
      },
      {
        internalType: "string",
        name: "img",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "goal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endAt",
        type: "uint256",
      },
      {
        internalType: "enum funfund.Status",
        name: "_status",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amountCollected",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "enum funfund.Status",
        name: "_newStatus",
        type: "uint8",
      },
    ],
    name: "changeStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_desc",
        type: "string",
      },
      {
        internalType: "string",
        name: "_img",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_goal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endAt",
        type: "uint256",
      },
    ],
    name: "createCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "deleteCampaigns",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "donateCampagin",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllCampaigns",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "desc",
            type: "string",
          },
          {
            internalType: "string",
            name: "img",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "goal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endAt",
            type: "uint256",
          },
          {
            internalType: "enum funfund.Status",
            name: "_status",
            type: "uint8",
          },
          {
            internalType: "address[]",
            name: "donors",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "donorsContribution",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "amountCollected",
            type: "uint256",
          },
        ],
        internalType: "struct funfund.Campaign[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getCampaignDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "desc",
        type: "string",
      },
      {
        internalType: "string",
        name: "img",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "goal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endAt",
        type: "uint256",
      },
      {
        internalType: "enum funfund.Status",
        name: "_status",
        type: "uint8",
      },
      {
        internalType: "address[]",
        name: "donors",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "donorsContribution",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "amountCollected",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "donors",
        type: "address",
      },
    ],
    name: "getContributionsByAddress",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getTotalContributions",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0604052600060015534801561001557600080fd5b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050608051612d8161006c600039600081816110fc01526116d70152612d816000f3fe6080604052600436106100915760003560e01c806386cdf6041161005957806386cdf6041461019c578063980f2e66146101c7578063c5a8a2ab146101f0578063d993de6214610219578063e09468071461026057610091565b8063141961bc1461009657806318ea5fd6146100db57806329ffdf621461011857806349ed2fa9146101345780635bd1baaf1461015f575b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b89190611a35565b610289565b6040516100d299989796959493929190611bb9565b60405180910390f35b3480156100e757600080fd5b5061010260048036038101906100fd9190611c87565b6104ac565b60405161010f9190611cc7565b60405180910390f35b610132600480360381019061012d9190611a35565b6105a1565b005b34801561014057600080fd5b5061014961092a565b6040516101569190611cc7565b60405180910390f35b34801561016b57600080fd5b5061018660048036038101906101819190611a35565b610930565b6040516101939190611cc7565b60405180910390f35b3480156101a857600080fd5b506101b161095e565b6040516101be9190612084565b60405180910390f35b3480156101d357600080fd5b506101ee60048036038101906101e991906121db565b610d13565b005b3480156101fc57600080fd5b50610217600480360381019061021291906122cf565b6110d5565b005b34801561022557600080fd5b50610240600480360381019061023b9190611a35565b611306565b6040516102579b9a999897969594939291906123ed565b60405180910390f35b34801561026c57600080fd5b5061028760048036038101906102829190611a35565b611640565b005b6000818154811061029957600080fd5b90600052602060002090600b02016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020180546102e8906124ea565b80601f0160208091040260200160405190810160405280929190818152602001828054610314906124ea565b80156103615780601f1061033657610100808354040283529160200191610361565b820191906000526020600020905b81548152906001019060200180831161034457829003601f168201915b505050505090806003018054610376906124ea565b80601f01602080910402602001604051908101604052809291908181526020018280546103a2906124ea565b80156103ef5780601f106103c4576101008083540402835291602001916103ef565b820191906000526020600020905b8154815290600101906020018083116103d257829003601f168201915b505050505090806004018054610404906124ea565b80601f0160208091040260200160405190810160405280929190818152602001828054610430906124ea565b801561047d5780601f106104525761010080835404028352916020019161047d565b820191906000526020600020905b81548152906001019060200180831161046057829003601f168201915b5050505050908060050154908060060154908060070160009054906101000a900460ff169080600a0154905089565b600080600084815481106104c3576104c261251b565b5b90600052602060002090600b020190506000805b8260080180549050811015610595578473ffffffffffffffffffffffffffffffffffffffff168360080182815481106105135761051261251b565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036105885782600901818154811061056f5761056e61251b565b5b9060005260206000200154826105859190612579565b91505b80806001019150506104d7565b50809250505092915050565b600034116105e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105db906125f9565b60405180910390fd5b60008082815481106105f9576105f861251b565b5b90600052602060002090600b020190506000600381111561061d5761061c611b42565b5b8160070160009054906101000a900460ff16600381111561064157610640611b42565b5b148061068257506001600381111561065c5761065b611b42565b5b8160070160009054906101000a900460ff1660038111156106805761067f611b42565b5b145b6106c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b890612665565b60405180910390fd5b600081600a015482600501546106d79190612685565b90508034116107905781600801339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816009013490806001815401808255809150506001900390600052602060002001600090919091909150553482600a0160008282546107849190612579565b925050819055506108a5565b6000813461079e9190612685565b90503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156107e6573d6000803e3d6000fd5b50600081346107f59190612685565b905083600801339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836009018190806001815401808255809150506001900390600052602060002001600090919091909150558084600a01600082825461089b9190612579565b9250508190555050505b816005015482600a0154036108e65760028260070160006101000a81548160ff021916908360038111156108dc576108db611b42565b5b0217905550610925565b816005015482600a015410156109245760018260070160006101000a81548160ff0219169083600381111561091e5761091d611b42565b5b02179055505b5b505050565b60015481565b60008082815481106109455761094461251b565b5b90600052602060002090600b0201600a01549050919050565b60606000805480602002602001604051908101604052809291908181526020016000905b82821015610d0a57838290600052602060002090600b020160405180610160016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054610a16906124ea565b80601f0160208091040260200160405190810160405280929190818152602001828054610a42906124ea565b8015610a8f5780601f10610a6457610100808354040283529160200191610a8f565b820191906000526020600020905b815481529060010190602001808311610a7257829003601f168201915b50505050508152602001600382018054610aa8906124ea565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad4906124ea565b8015610b215780601f10610af657610100808354040283529160200191610b21565b820191906000526020600020905b815481529060010190602001808311610b0457829003601f168201915b50505050508152602001600482018054610b3a906124ea565b80601f0160208091040260200160405190810160405280929190818152602001828054610b66906124ea565b8015610bb35780601f10610b8857610100808354040283529160200191610bb3565b820191906000526020600020905b815481529060010190602001808311610b9657829003601f168201915b5050505050815260200160058201548152602001600682015481526020016007820160009054906101000a900460ff166003811115610bf557610bf4611b42565b5b6003811115610c0757610c06611b42565b5b815260200160088201805480602002602001604051908101604052809291908181526020018280548015610c9057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610c46575b5050505050815260200160098201805480602002602001604051908101604052809291908181526020018280548015610ce857602002820191906000526020600020905b815481526020019060010190808311610cd4575b50505050508152602001600a8201548152505081526020019060010190610982565b50505050905090565b6000855111610d57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4e90612705565b60405180910390fd5b6000845111610d9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9290612771565b60405180910390fd5b6000835111610ddf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd6906127dd565b60405180910390fd5b60008211610e22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1990612849565b60405180910390fd5b42811015610e65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5c906128b5565b60405180910390fd5b600060405180610160016040528060016000815480929190610e86906128d5565b9190505581526020013373ffffffffffffffffffffffffffffffffffffffff16815260200187815260200186815260200185815260200184815260200183815260200160006003811115610edd57610edc611b42565b5b8152602001600067ffffffffffffffff811115610efd57610efc6120b0565b5b604051908082528060200260200182016040528015610f2b5781602001602082028036833780820191505090505b508152602001600067ffffffffffffffff811115610f4c57610f4b6120b0565b5b604051908082528060200260200182016040528015610f7a5781602001602082028036833780820191505090505b508152602001600081525090806001815401808255809150506001900390600052602060002090600b02016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190816110149190612ac9565b50606082015181600301908161102a9190612ac9565b5060808201518160040190816110409190612ac9565b5060a0820151816005015560c0820151816006015560e08201518160070160006101000a81548160ff021916908360038111156110805761107f611b42565b5b02179055506101008201518160080190805190602001906110a29291906118f7565b506101208201518160090190805190602001906110c0929190611981565b5061014082015181600a015550505050505050565b60008083815481106110ea576110e961251b565b5b90600052602060002090600b020190507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806111a357508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6111e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d990612be7565b60405180910390fd5b600060038111156111f6576111f5611b42565b5b82600381111561120957611208611b42565b5b148061123957506001600381111561122457611223611b42565b5b82600381111561123757611236611b42565b5b145b8061126857506002600381111561125357611252611b42565b5b82600381111561126657611265611b42565b5b145b80611296575060038081111561128157611280611b42565b5b82600381111561129457611293611b42565b5b145b6112d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112cc90612c53565b60405180910390fd5b818160070160006101000a81548160ff021916908360038111156112fc576112fb611b42565b5b0217905550505050565b6000806060806060600080600060608060008060008d8154811061132d5761132c61251b565b5b90600052602060002090600b0201905080600001548160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16826002018360030184600401856005015486600601548760070160009054906101000a900460ff1688600801896009018a600a01548880546113a8906124ea565b80601f01602080910402602001604051908101604052809291908181526020018280546113d4906124ea565b80156114215780601f106113f657610100808354040283529160200191611421565b820191906000526020600020905b81548152906001019060200180831161140457829003601f168201915b50505050509850878054611434906124ea565b80601f0160208091040260200160405190810160405280929190818152602001828054611460906124ea565b80156114ad5780601f10611482576101008083540402835291602001916114ad565b820191906000526020600020905b81548152906001019060200180831161149057829003601f168201915b505050505097508680546114c0906124ea565b80601f01602080910402602001604051908101604052809291908181526020018280546114ec906124ea565b80156115395780601f1061150e57610100808354040283529160200191611539565b820191906000526020600020905b81548152906001019060200180831161151c57829003601f168201915b50505050509650828054806020026020016040519081016040528092919081815260200182805480156115c157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611577575b505050505092508180548060200260200160405190810160405280929190818152602001828054801561161357602002820191906000526020600020905b8154815260200190600101908083116115ff575b505050505091509b509b509b509b509b509b509b509b509b509b509b505091939597999b90929496989a50565b60008082815481106116555761165461251b565b5b90600052602060002090600b020190503373ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148061170e57503373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16145b61174d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174490612cbf565b60405180910390fd5b8060060154421015611794576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178b90612d2b565b60405180910390fd5b6117a181600001546117d2565b60038160070160006101000a81548160ff021916908360038111156117c9576117c8611b42565b5b02179055505050565b60008082815481106117e7576117e661251b565b5b90600052602060002090600b02019050600081600a015411156118f35760005b81600801805490508110156118f157600082600801828154811061182e5761182d61251b565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008360090183815481106118735761187261251b565b5b906000526020600020015490508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156118c6573d6000803e3d6000fd5b508084600a0160008282546118db9190612685565b9250508190555050508080600101915050611807565b505b5050565b828054828255906000526020600020908101928215611970579160200282015b8281111561196f5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611917565b5b50905061197d91906119ce565b5090565b8280548282559060005260206000209081019282156119bd579160200282015b828111156119bc5782518255916020019190600101906119a1565b5b5090506119ca91906119ce565b5090565b5b808211156119e75760008160009055506001016119cf565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b611a12816119ff565b8114611a1d57600080fd5b50565b600081359050611a2f81611a09565b92915050565b600060208284031215611a4b57611a4a6119f5565b5b6000611a5984828501611a20565b91505092915050565b611a6b816119ff565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a9c82611a71565b9050919050565b611aac81611a91565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611aec578082015181840152602081019050611ad1565b60008484015250505050565b6000601f19601f8301169050919050565b6000611b1482611ab2565b611b1e8185611abd565b9350611b2e818560208601611ace565b611b3781611af8565b840191505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60048110611b8257611b81611b42565b5b50565b6000819050611b9382611b71565b919050565b6000611ba382611b85565b9050919050565b611bb381611b98565b82525050565b600061012082019050611bcf600083018c611a62565b611bdc602083018b611aa3565b8181036040830152611bee818a611b09565b90508181036060830152611c028189611b09565b90508181036080830152611c168188611b09565b9050611c2560a0830187611a62565b611c3260c0830186611a62565b611c3f60e0830185611baa565b611c4d610100830184611a62565b9a9950505050505050505050565b611c6481611a91565b8114611c6f57600080fd5b50565b600081359050611c8181611c5b565b92915050565b60008060408385031215611c9e57611c9d6119f5565b5b6000611cac85828601611a20565b9250506020611cbd85828601611c72565b9150509250929050565b6000602082019050611cdc6000830184611a62565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611d17816119ff565b82525050565b611d2681611a91565b82525050565b600082825260208201905092915050565b6000611d4882611ab2565b611d528185611d2c565b9350611d62818560208601611ace565b611d6b81611af8565b840191505092915050565b611d7f81611b98565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000611dbd8383611d1d565b60208301905092915050565b6000602082019050919050565b6000611de182611d85565b611deb8185611d90565b9350611df683611da1565b8060005b83811015611e27578151611e0e8882611db1565b9750611e1983611dc9565b925050600181019050611dfa565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000611e6c8383611d0e565b60208301905092915050565b6000602082019050919050565b6000611e9082611e34565b611e9a8185611e3f565b9350611ea583611e50565b8060005b83811015611ed6578151611ebd8882611e60565b9750611ec883611e78565b925050600181019050611ea9565b5085935050505092915050565b600061016083016000830151611efc6000860182611d0e565b506020830151611f0f6020860182611d1d565b5060408301518482036040860152611f278282611d3d565b91505060608301518482036060860152611f418282611d3d565b91505060808301518482036080860152611f5b8282611d3d565b91505060a0830151611f7060a0860182611d0e565b5060c0830151611f8360c0860182611d0e565b5060e0830151611f9660e0860182611d76565b50610100830151848203610100860152611fb08282611dd6565b915050610120830151848203610120860152611fcc8282611e85565b915050610140830151611fe3610140860182611d0e565b508091505092915050565b6000611ffa8383611ee3565b905092915050565b6000602082019050919050565b600061201a82611ce2565b6120248185611ced565b93508360208202850161203685611cfe565b8060005b8581101561207257848403895281516120538582611fee565b945061205e83612002565b925060208a0199505060018101905061203a565b50829750879550505050505092915050565b6000602082019050818103600083015261209e818461200f565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6120e882611af8565b810181811067ffffffffffffffff82111715612107576121066120b0565b5b80604052505050565b600061211a6119eb565b905061212682826120df565b919050565b600067ffffffffffffffff821115612146576121456120b0565b5b61214f82611af8565b9050602081019050919050565b82818337600083830152505050565b600061217e6121798461212b565b612110565b90508281526020810184848401111561219a576121996120ab565b5b6121a584828561215c565b509392505050565b600082601f8301126121c2576121c16120a6565b5b81356121d284826020860161216b565b91505092915050565b600080600080600060a086880312156121f7576121f66119f5565b5b600086013567ffffffffffffffff811115612215576122146119fa565b5b612221888289016121ad565b955050602086013567ffffffffffffffff811115612242576122416119fa565b5b61224e888289016121ad565b945050604086013567ffffffffffffffff81111561226f5761226e6119fa565b5b61227b888289016121ad565b935050606061228c88828901611a20565b925050608061229d88828901611a20565b9150509295509295909350565b600481106122b757600080fd5b50565b6000813590506122c9816122aa565b92915050565b600080604083850312156122e6576122e56119f5565b5b60006122f485828601611a20565b9250506020612305858286016122ba565b9150509250929050565b600082825260208201905092915050565b600061232b82611d85565b612335818561230f565b935061234083611da1565b8060005b838110156123715781516123588882611db1565b975061236383611dc9565b925050600181019050612344565b5085935050505092915050565b600082825260208201905092915050565b600061239a82611e34565b6123a4818561237e565b93506123af83611e50565b8060005b838110156123e05781516123c78882611e60565b97506123d283611e78565b9250506001810190506123b3565b5085935050505092915050565b600061016082019050612403600083018e611a62565b612410602083018d611aa3565b8181036040830152612422818c611b09565b90508181036060830152612436818b611b09565b9050818103608083015261244a818a611b09565b905061245960a0830189611a62565b61246660c0830188611a62565b61247360e0830187611baa565b8181036101008301526124868186612320565b905081810361012083015261249b818561238f565b90506124ab610140830184611a62565b9c9b505050505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061250257607f821691505b602082108103612515576125146124bb565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612584826119ff565b915061258f836119ff565b92508282019050808211156125a7576125a661254a565b5b92915050565b7f446f6e6174696f6e20616d6f756e74203e203000000000000000000000000000600082015250565b60006125e3601383611abd565b91506125ee826125ad565b602082019050919050565b60006020820190508181036000830152612612816125d6565b9050919050565b7f4e6f7420416374697665206f722050656e64696e670000000000000000000000600082015250565b600061264f601583611abd565b915061265a82612619565b602082019050919050565b6000602082019050818103600083015261267e81612642565b9050919050565b6000612690826119ff565b915061269b836119ff565b92508282039050818111156126b3576126b261254a565b5b92915050565b7f5469746c65206d757374206e6f7420626520656d707479000000000000000000600082015250565b60006126ef601783611abd565b91506126fa826126b9565b602082019050919050565b6000602082019050818103600083015261271e816126e2565b9050919050565b7f4465736372697074696f6e206d757374206e6f7420626520656d707479000000600082015250565b600061275b601d83611abd565b915061276682612725565b602082019050919050565b6000602082019050818103600083015261278a8161274e565b9050919050565b7f496d61676520555249206d757374206e6f7420626520656d7074790000000000600082015250565b60006127c7601b83611abd565b91506127d282612791565b602082019050919050565b600060208201905081810360008301526127f6816127ba565b9050919050565b7f476f616c203e207a65726f000000000000000000000000000000000000000000600082015250565b6000612833600b83611abd565b915061283e826127fd565b602082019050919050565b6000602082019050818103600083015261286281612826565b9050919050565b7f456e64732074696d65203e206e6f770000000000000000000000000000000000600082015250565b600061289f600f83611abd565b91506128aa82612869565b602082019050919050565b600060208201905081810360008301526128ce81612892565b9050919050565b60006128e0826119ff565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036129125761291161254a565b5b600182019050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261297f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612942565b6129898683612942565b95508019841693508086168417925050509392505050565b6000819050919050565b60006129c66129c16129bc846119ff565b6129a1565b6119ff565b9050919050565b6000819050919050565b6129e0836129ab565b6129f46129ec826129cd565b84845461294f565b825550505050565b600090565b612a096129fc565b612a148184846129d7565b505050565b5b81811015612a3857612a2d600082612a01565b600181019050612a1a565b5050565b601f821115612a7d57612a4e8161291d565b612a5784612932565b81016020851015612a66578190505b612a7a612a7285612932565b830182612a19565b50505b505050565b600082821c905092915050565b6000612aa060001984600802612a82565b1980831691505092915050565b6000612ab98383612a8f565b9150826002028217905092915050565b612ad282611ab2565b67ffffffffffffffff811115612aeb57612aea6120b0565b5b612af582546124ea565b612b00828285612a3c565b600060209050601f831160018114612b335760008415612b21578287015190505b612b2b8582612aad565b865550612b93565b601f198416612b418661291d565b60005b82811015612b6957848901518255600182019150602085019450602081019050612b44565b86831015612b865784890151612b82601f891682612a8f565b8355505b6001600288020188555050505b505050505050565b7f4e6f7420617574686f72697a6564000000000000000000000000000000000000600082015250565b6000612bd1600e83611abd565b9150612bdc82612b9b565b602082019050919050565b60006020820190508181036000830152612c0081612bc4565b9050919050565b7f496e76616c696420737461747573000000000000000000000000000000000000600082015250565b6000612c3d600e83611abd565b9150612c4882612c07565b602082019050919050565b60006020820190508181036000830152612c6c81612c30565b9050919050565b7f6e6f74206f776e6572206f722063726561746f72000000000000000000000000600082015250565b6000612ca9601483611abd565b9150612cb482612c73565b602082019050919050565b60006020820190508181036000830152612cd881612c9c565b9050919050565b7f6e6f742066696e69736865640000000000000000000000000000000000000000600082015250565b6000612d15600c83611abd565b9150612d2082612cdf565b602082019050919050565b60006020820190508181036000830152612d4481612d08565b905091905056fea26469706673582212203568c52c5bd94714d4a6b83df9212b8f394f0f0a8fbca421221bcd4868d146b564736f6c63430008180033";

type FunfundConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FunfundConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Funfund__factory extends ContractFactory {
  constructor(...args: FunfundConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Funfund & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Funfund__factory {
    return super.connect(runner) as Funfund__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FunfundInterface {
    return new Interface(_abi) as FunfundInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Funfund {
    return new Contract(address, _abi, runner) as unknown as Funfund;
  }
}
