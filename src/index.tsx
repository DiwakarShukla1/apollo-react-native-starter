import React from "react";
import { AppRegistry } from "react-native";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Routes from "./routes";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql",
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

export default App;
