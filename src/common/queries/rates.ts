import gql from "graphql-tag";

const obj = {
    getAllRates : gql`
        {
            rates(currency: "USD") {
                currency
                rate
            }
        }
    `,
};
export default obj;
