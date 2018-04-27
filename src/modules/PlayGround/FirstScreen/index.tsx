import * as React from "react";
import { Query } from "react-apollo";
import { Rates } from "../../../common/queries";
import RateList from "./List";
import { QueryHOC } from "../../../common/HOCs";

const ExchangeRates = () => (
  <Query
    query={Rates.getAllRates}
  >
    {QueryHOC(RateList)}
  </Query>
);

export default ExchangeRates;
