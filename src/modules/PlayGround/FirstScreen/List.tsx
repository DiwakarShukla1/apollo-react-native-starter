import React from "react";
import { View, Text } from "react-native";

interface IProps {
    data?: any;
}

const List = ({data }: IProps) => {
    return data.rates.map(({ currency, rate }) => (
      <View key={currency}>
        <Text>{`${currency}: ${rate}`}</Text>
      </View>
    ));
};

export default List;
