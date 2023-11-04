import * as TYPES from '../utils/interfaces'
import { RESTAURANT_ITEM, RESTAURANT_API } from './constants'

export const fetchData = async (resId: string): Promise<{
    resInfo: TYPES.RestaurantDataItem
    offerDetails: TYPES.OfferCards
    restaurantMenu: TYPES.Card[]
}> => {
    const res = await fetch(RESTAURANT_ITEM + resId);
    const jsonData = await res.json();
    console.log(jsonData.data.cards)
    let offerDetails = jsonData?.data?.cards[1]?.card;
    let restaurantMenu = jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    let resInfo = jsonData?.data?.cards[0];
    return { resInfo, offerDetails, restaurantMenu };
}

export const fetchRestaurants = (): Promise<TYPES.MainContent[]> => fetch(RESTAURANT_API)
    .then(response => response.json())
    .catch(err => console.log(err))
    .then(jsonData => jsonData?.data.cards)