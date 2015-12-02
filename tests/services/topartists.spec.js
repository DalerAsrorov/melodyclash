describe("TopArtists service", function() {
  var artist, $httpBackend;

  beforeEach(module('app'));
  beforeEach(inject(function($injector) {
    artist = $injector.get('TopArtists');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend
      .whenGET('http://developer.echonest.com/api/v4/artist/biographies?api_key=CHHHMSBTT8PT4XGSA&name=green%20day&format=json&results=1&start=0&license=cc-by-sa')
      .respond(200, {
        artist:
        {
            status:
            {
              version: "4.2",
              code: 0,
              message: "Success"
            },
            start: 0,
            total: 2,
            biographies:
            [
              {
                  text: "Some bio",
                  site: "last.fm",
                  url: "http://www.last.fm/music/Green+Day/+wiki",
                  license:
                  {
                    type: "cc-by-sa",
                    attribution: "Last.fm",
                    "attribution-url": "http://www.last.fm/music/Green+Day/+wiki",
                    url: "http://creativecommons.org/licenses/by-sa/3.0/",
                    version: "3.0"
                  }
              }
            ]
          }

      });
  }));
  var artistName = "Green Day";

  // getBio() test 1
  it("getBio() should successfully return the bio of a particular artist and return the status 'Success'", function() {
    artist.getBio(artistName).then(function(response) {
      //console.log(response);
      expect(response.status.message).toEqual("Success");
    });
  });

  // getBio() test 2
  it("getBio() should return correct license type to check if the given bio is provided by the known source", function() {
    artist.getBio(artistName).then(function(response) {
      //console.log(response);
      expect(response.license.type).toEqual("cc-by-sa");
    });
  });

  // getBio() test 3
  it("getBio() also return the official site of the bio providing system", function() {
    artist.getBio(artistName).then(function(response) {
      //console.log(response);
      expect(response.biographies[0].site).toEqual("last.fm");
    });
  });

}); // end of describe for app service
