export const idlFactory = ({ IDL }) => {
  const Sender = IDL.Record({
    'id' : IDL.Text,
    'residentCountry' : IDL.Text,
    'name' : IDL.Text,
    'email' : IDL.Text,
  });
  const Government = IDL.Record({
    'id' : IDL.Text,
    'country' : IDL.Text,
    'ministry' : IDL.Text,
    'organization' : IDL.Text,
  });
  const CampaignData = IDL.Record({
    'id' : IDL.Text,
    'title' : IDL.Text,
    'description' : IDL.Text,
    'fundsToBeRaised' : IDL.Int64,
  });
  const Transaction = IDL.Record({
    'id' : IDL.Text,
    'status' : IDL.Bool,
    'amountInDollars' : IDL.Text,
    'remarks' : IDL.Text,
  });
  const FundDetails = IDL.Record({
    'id' : IDL.Text,
    'to' : Government,
    'campaign' : CampaignData,
    'from' : Sender,
    'transaction' : Transaction,
  });
  return IDL.Service({
    'createFunds' : IDL.Func(
        [IDL.Text, Sender, Government, CampaignData, Transaction],
        [],
        ['oneway'],
      ),
    'getFunds' : IDL.Func([], [IDL.Vec(FundDetails)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
