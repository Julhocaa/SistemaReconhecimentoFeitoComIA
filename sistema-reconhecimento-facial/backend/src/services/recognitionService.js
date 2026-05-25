function isAuthorized(confidence, minimum = 0.7) {
  return confidence >= minimum;
}
module.exports = { isAuthorized };
