import React from "react";
import { AppRegistry } from "react-native";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import First from "./Query";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql",
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <First />
      </ApolloProvider>
    );
  }
}

export default App;
