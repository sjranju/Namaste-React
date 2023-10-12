import { BaseQueryApi, createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { DocumentData, SnapshotOptions, arrayUnion, deleteDoc, deleteField, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../utils/firebaseConfig'
import { userContext } from '../context/UserContext'
import { useContext } from 'react'
import { User } from 'firebase/auth'

type AddItemArg = {
    itemIds: string
    restaurantId: string
    user: string
    resetCart: boolean
}

type GetCartItemsReturn = {
    itemIds: string[],
    restaurantId: string
}

export const api = createApi({
    baseQuery: fakeBaseQuery(),
    tagTypes: ['GetCartItems'],
    endpoints: (build) => ({
        getCartItems: build.query<"notExists" | GetCartItemsReturn, string>({
            async queryFn(user, api: BaseQueryApi) {
                try {
                    const cartDocRef = doc(db, `cart/${user}`)
                    const getDocResult = await getDoc(cartDocRef)
                    if (getDocResult.exists()) {
                        const result: GetCartItemsReturn = getDocResult.data() as GetCartItemsReturn
                        // console.log('getDocResult', result)
                        // if(result!==undefined)
                        return { data: result }
                    } else {
                        return { data: 'notExists' }
                    }
                } catch (err) {
                    return { error: err }
                }
            },
            providesTags: ['GetCartItems']
        }),

        addToCart: build.mutation<string, AddItemArg>({
            async queryFn({ restaurantId, itemIds, user, resetCart }, api: BaseQueryApi) {
                console.log('addtocart');
                try {
                    const cartDocRef = doc(db, `cart/${user}`)
                    if (resetCart) {
                        await updateDoc(cartDocRef, { itemIds: deleteField(), restaurantId: deleteField() })
                    }
                    await setDoc(cartDocRef, { restaurantId, itemIds: arrayUnion(itemIds) }, { merge: true })
                    return { data: 'updated' }
                } catch (err) {
                    console.log(err)
                    return { error: err };
                }
            },
            invalidatesTags: ['GetCartItems'],
        }),

        // updateCartRestaurant: build.mutation<string, string>({
        //     query: async (user) => {
        //         try {
        //             const cartDocRef = doc(db, `cart/${user}`)
        //             deleteDoc(cartDocRef)
        //         } catch (err) {
        //             console.log(err)
        //             return { error: err }
        //         }
        //     }
        // })
    })
});

export const { useAddToCartMutation, useGetCartItemsQuery } = api