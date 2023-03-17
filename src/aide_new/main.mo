  import Text "mo:base/Text";
  import Bool "mo:base/Bool";
  import Int64 "mo:base/Int64";
  import List "mo:base/List";

actor Campaign {
  var uniFunds: List.List<FundDetails> = List.nil<FundDetails>();

  type Sender = {
    id: Text;
    name: Text;
    email: Text;
    residentCountry: Text;
  };

  type Government = {
    id: Text;
    ministry: Text;
    country: Text;
    organization: Text;
  };

  type CampaignData = {
    id: Text;
    title: Text;
    description: Text;
    fundsToBeRaised: Int64;
  };

  type Transaction = {
    id: Text;
    amountInDollars: Text;
    status: Bool;
    remarks: Text; 
  };

  type FundDetails = {
    id: Text;
    from: Sender;
    to: Government;
    campaign: CampaignData;
    transaction: Transaction;
  };

  public func createFunds(id: Text, from: Sender, to: Government, campaign: CampaignData, transaction: Transaction) {
    let newCrowdFund: FundDetails = {
      id = id;
      from =from;
      to = to;
      campaign = campaign;
      transaction = transaction;
    };

    uniFunds := List.push<FundDetails>(newCrowdFund, uniFunds);
  };

  public query func getFunds() : async [FundDetails] {
    return List.toArray<FundDetails>(uniFunds);
  };
};
