import * as React from "react";
import { Query } from "react-apollo";
import { Rates } from "../../../common/queries";
import RateList from "./List";
import { QueryHOC } from "../../../common/HOCs";
import { noHeaders } from "../../../common/utils";

class ExchangeRates extends React.Component {
  static navigationOptions = noHeaders();

  render() {
    return (
      <Query
        query={Rates.getAllRates}
      >
        {QueryHOC(RateList)}
      </Query>
    );
  }
}

export default ExchangeRates;
