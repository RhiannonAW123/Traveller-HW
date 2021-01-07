const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map( function(journey) {
    return journey.startLocation
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map( function(journey) {
    return journey.endLocation
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourneys =  this.journeys.filter( function(journey) {
    return journey.transport === transport
  });
  return foundJourneys
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const foundJourneys = this.journeys.filter( function(journey) {
    return journey.distance >= minDistance
  });
  return foundJourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce( function(allDistance, currentDistance) {
    return allDistance += currentDistance.distance;
  },0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports = this.journeys.map (function (journey) {
    return journey.transport;
  });

  const meansOfTransport = transports.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
  return meansOfTransport;
};


module.exports = Traveller;
