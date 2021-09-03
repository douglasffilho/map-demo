const consumers = {};

const LocationChangedListener = {
  /**
   * add listeners to location changed event
   * @param {string} consumerName
   * @param {function} consumerListener
   */
  subscribe(consumerName, consumerListener) {
    consumers[consumerName] = consumerListener;
  },

  /**
   * receives locatino change message
   * @param {{latitude: Number, longitude: Number}} locationChange
   */
  publish(locationChange) {
    Object.values(consumers).forEach((listen) => listen(locationChange));
  },
};

export default LocationChangedListener;
