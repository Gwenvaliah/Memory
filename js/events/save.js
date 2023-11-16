/**
 * Get Datas
 * @param key 
 */
function getData(key) {
  // Short Ternary
  // return dataConverted ? dataConverted : []
  // Shortest Ternary
  return JSON.parse(localStorage.getItem(key)) ?? [];
}

/**
 * Save data
 * @param {String} key 
 * @param {array} data 
 */
function saveData(key, data) {
    // Get Previous and Push
    const old = getData("users")
    // On ajoute le nouveau user à la liste existante
    old.push(data)
    // Convert data
    const convertData = JSON.stringify(old)
    // Save it
    localStorage.setItem(key, convertData)
}
// Export to
export { getData, saveData }