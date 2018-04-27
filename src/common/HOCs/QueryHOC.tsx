import React from "react";
import { View, Text } from "react-native";

const QueryHOC = (WrappedComponent) => ({ loading, error, data }) => {
    if (loading) { return <View><Text>Loading...</Text></View>; }
    if (error) { return <View><Text>Error :(</Text></View>; }
    return <WrappedComponent data={data}/>;
};

export default QueryHOC;
