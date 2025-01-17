const RESTAURANTS_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

export const GET_RESTAURANTS_URL = `${window.location.hostname === 'netlify' ?
    `https://corsproxy.io/?${RESTAURANTS_URL}` :
    `https://delicious-cors-proxy.singanoodiranjana.workers.dev/corsproxy/?apiurl=${encodeURIComponent(RESTAURANTS_URL)}`}`

export const CLOUDINARY_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

const RESTAURANT_ITEM = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId='

export const GET_RESTAURANT_ITEM_URL = `${window.location.hostname === 'netlify' ?
    `https://corsproxy.io/?${RESTAURANT_ITEM}`
    : `https://delicious-cors-proxy.singanoodiranjana.workers.dev/corsproxy/?apiurl=${encodeURIComponent(RESTAURANT_ITEM)}`}`

export const COUPON_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/'

export const TOP_PICKS_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/'

const GET_MORE_RESTAURANTS = 'https://www.swiggy.com/dapi/restaurants/list/update'

export const GET_MORE_RESTAURANTS_URL = `${window.location.hostname === 'netlify' ?
    `https://corsproxy.io/?${GET_MORE_RESTAURANTS}`
    : `https://delicious-cors-proxy.singanoodiranjana.workers.dev/corsproxy/?apiurl=${encodeURIComponent(GET_MORE_RESTAURANTS)}`}`

const PRE_SEARCH_URL = 'https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.96340&lng=77.58550'

export const GET_PRE_SEARCH_URL = `${window.location.hostname === 'netlify' ?
    `https://corsproxy.io/?${PRE_SEARCH_URL}`
    : `https://delicious-cors-proxy.singanoodiranjana.workers.dev/corsproxy/?apiurl=${encodeURIComponent(PRE_SEARCH_URL)}`}`

export const PRE_SEARCH_CLOUDINARY_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/'

export const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/ranjana-singanoodi/'

export const EMAIL_ID = 'singanoodiranjana@gmail.com'

export const FAQ = [
    {
        id: 1,
        title: "Can I edit my order?",
        description:
            "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
    },
    {
        id: 2,
        title: "I want to cancel my order",
        description:
            "In order to cancel your order, please click on 'Help' and then 'I want to cancel my order'. Please note that we may charge you a cancellation fee as it helps us to minimise food wastage and also compensate our restaurant partners for cancelled orders.",
    },
    {
        id: 3,
        title: "Will Delicious be accountable for quality/quantity? ",
        description:
            "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
    },
    {
        id: 4,
        title: "Is there a minimum order value?",
        description:
            "We have no minimum order value and you can order for any amount. ",
    },
    {
        id: 5,
        title: "Do you charge for delivery?",
        description:
            "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
    },
    {
        id: 6,
        title: "How long do you take to deliver?",
        description:
            "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
    },
    {
        id: 7,
        title: "What are your delivery hours?",
        description:
            "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
    },
    {
        id: 8,
        title: "Is single order from many restaurants possible?",
        description:
            "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
    }
];

export const FILTERS = {
    DELIVERY_TIME: {
        "isFiltered": true,
        "facets": {},
        "sortAttribute": "deliveryTimeAsc"
    },
    RATINGS4: {
        "isFiltered": true,
        "facets": {},
        "sortAttribute": "modelBasedRatingDesc"
    },
    TOP_RATED: {
        "isFiltered": true,
        "facets": {
            "rating": [
                {
                    "value": "ratingfacetquery4"
                }
            ]
        }
    },
    PURE_VEG: {
        "isFiltered": true,
        "facets": {
            "isVeg": [
                {
                    "value": "isVegfacetquery2"
                }
            ]
        }
    },
    LOW_TO_HIGH: {
        "isFiltered": true,
        "facets": {},
        "sortAttribute": "costForTwoAsc"
    },
    HIGH_TO_LOW: {
        "isFiltered": true,
        "facets": {},
        "sortAttribute": "costForTwoDesc"
    },
    FAST_DELIVERY: {
        "isFiltered": true,
        "facets": {
            "deliveryTime": [
                {
                    "value": "deliveryTimefacetquery1"
                }
            ]
        }
    }
}