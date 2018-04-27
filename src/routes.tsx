import { StackNavigator } from "react-navigation";
import { FirstScreen } from "./modules/PlayGround";

const Routes = StackNavigator({
    FirstScreen : { screen: FirstScreen },
});

export default Routes;
