import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = function (nav) {
    navigator = nav;
};

export const navigate = function (routeName, params) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: params
        })
    );
}