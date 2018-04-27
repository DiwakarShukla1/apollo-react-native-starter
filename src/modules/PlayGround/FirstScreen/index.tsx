import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View, Text } from "react-native";

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) { return <View><Text>Loading...</Text></View>; }
      if (error) { return <View><Text>Error :(</Text></View>; }

      return data.rates.map(({ currency, rate }) => (
        <View key={currency}>
          <Text>{`${currency}: ${rate}`}</Text>
        </View>
      ));
    }}
  </Query>
);

export default ExchangeRates;
