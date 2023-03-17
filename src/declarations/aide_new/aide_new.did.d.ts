import type { Principal } from '@dfinity/principal';
export interface CampaignData {
  'id' : string,
  'title' : string,
  'description' : string,
  'fundsToBeRaised' : bigint,
}
export interface FundDetails {
  'id' : string,
  'to' : Government,
  'campaign' : CampaignData,
  'from' : Sender,
  'transaction' : Transaction,
}
export interface Government {
  'id' : string,
  'country' : string,
  'ministry' : string,
  'organization' : string,
}
export interface Sender {
  'id' : string,
  'residentCountry' : string,
  'name' : string,
  'email' : string,
}
export interface Transaction {
  'id' : string,
  'status' : boolean,
  'amountInDollars' : string,
  'remarks' : string,
}
export interface _SERVICE {
  'createFunds' : (
      arg_0: string,
      arg_1: Sender,
      arg_2: Government,
      arg_3: CampaignData,
      arg_4: Transaction,
    ) => Promise<undefined>,
  'getFunds' : () => Promise<Array<FundDetails>>,
}
