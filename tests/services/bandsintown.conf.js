describe("BandsInTown service", function() {
  var events, $httpBackend;

  beforeEach(module('app'));
  beforeEach(inject(function($injector) {
    events = $injector.get('BandsInTown');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend
      .whenGET('http://api.bandsintown.com/events/recommended?artists[]=Skrillex&location=Los%20Angeles,CA&radius=10&format=json&app_id=YOUR_APP_ID')
      .respond(200, {
        events: [
          {
              id: 10898546,
              url: "http://www.bandsintown.com/event/10898546?app_id=YOUR_APP_ID",
              datetime: "2015-12-12T22:00:00",
              ticket_url: "http://www.bandsintown.com/event/10898546/buy_tickets?app_id=YOUR_APP_ID&came_from=233",
              artists: [
              {
                name: "Kill The Noise",
                url: "http://www.bandsintown.com/KillTheNoise",
                mbid: "a9930a14-8fbb-435a-ad25-f4b6cae71523"
              }
              ],
              venue: {
                id: 1712094,
                url: "http://www.bandsintown.com/venue/1712094",
                name: "Sound Nightclub",
                city: "Los Angeles",
                region: "CA",
                country: "United States",
                latitude: 34.1003562,
                longitude: -118.3360603
              },
                ticket_status: "available",
                on_sale_datetime: null
              }
        ]
      });
  }));
  var loc = {loc: 34.1003562, lat: -118.3360603};
  var artist = "Kill The Noise"

  // findConcert() test
  it("findConcert() should return an array of an object or objects that contain info about particular concert/event", function() {
    events.findConcert(artist, loc).then(function(data) {
      expect(data.length).toEqual(1);
    });
  });

  // findConcert() test
  it("findConcert() should also return an objet that contains the name of the artist/performer", function() {
    events.findConcert(artist, loc).then(function(data) {
      expect(data.artists.name).toEqual("Kill The Noise");
    });
  });

  // findConcert() test
  it("findConcert()should also return the coordinates where the event will be located atr", function() {
    events.findConcert(artist, loc).then(function(data) {
      expect(data.venue.latitude).toEqual(loc.lat);
      expect(data.venue.longitude).toEqual(loc.lon);
    });
  });


}); // end of describe for app service
