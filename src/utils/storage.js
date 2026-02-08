// localStorage utilities

/**
 * Set item in localStorage
 * @param {string} key - The key to set
 * @param {any} value - The value to set
 */
function setItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting item in localStorage:', error);
    }
}

/**
 * Get item from localStorage
 * @param {string} key - The key to get
 * @returns {any} - The value retrieved from localStorage
 */
function getItem(key) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error('Error getting item from localStorage:', error);
        return null;
    }
}

/**
 * Remove item from localStorage
 * @param {string} key - The key to remove
 */
function removeItem(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing item from localStorage:', error);
    }
}

/**
 * Clear all items from localStorage
 */
function clearStorage() {
    try {
        localStorage.clear();
    } catch (error) {
        console.error('Error clearing localStorage:', error);
    }
}