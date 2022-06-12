import * as SecureStore from 'expo-secure-store';


/**
 * @async
 * stores an item to local storage if the key and value are non-empty
 *
 * @param {string} key - the key of the item to store
 * @param {string} value - the value of the item to store
 *
 * @returns {Promise<boolean>} true if the item was stored, false otherwise
 */
export async function storeItem(key: string, value: string) : Promise<boolean> {
    if (key && value) {
        await SecureStore.setItemAsync(key, value);
        return true;
    }
    return false;
}


/**
 * @async
 * Checks if the key exists in local storage, with a value. Returns a
 * boolean indicating whether the key exists.
 *
 * @param {string} key - the key of the item to check
 *
 * @returns {Promise<boolean>} true if the key exists in local storage
 */
export async function hasItem(key: string) : Promise<boolean> {
    if (!key) {
        return false;
    }
    let result = await SecureStore.getItemAsync(key);
    return result ? true : false;
}

/**
 * @async
 * gets an item from local storage if it exists and returns the string if the removal was successful
 *
 * @param {string} key - the key of the item to remove
 *
 * @returns {Promise<boolean>} value of the item or null if it does not exist
 */
export async function getItem(key: string) : Promise<string | null> {
    if (!key) {
        return null;
    }
    let result = await SecureStore.getItemAsync(key);
    return result || null;
}


/**
 * @async
 * removes an item from local storage if it exists and returns the true if the removal was successful
 *
 * @param {string} key - the key of the item to remove
 *
 * @returns {Promise<boolean>} true if the item was removed, false if the item did not exist
 */
export async function removeItem(key: string) : Promise<boolean> {
    if (!key) {
        return false;
    }
    let possibleResult = await SecureStore.getItemAsync(key);
    console.log(possibleResult);
    await SecureStore.deleteItemAsync(key);
    return true;
}
