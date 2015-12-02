describe("Spotify Artist Info Search service", function() {
  var artistsInfo, $httpBackend;

  beforeEach(module('app'));
  beforeEach(inject(function($injector) {
    artistsInfo = $injector.get('Spotify');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend
      .whenGET('https://api.spotify.com/v1/artists/234332/related-artists')
      .respond(200, {
        artistsInfo: [
          {
              external_urls: {
              spotify: "https://open.spotify.com/artist/6FBDaR13swtiWwGhX1WQsP"
              },
              followers: {
              href: null,
              total: 1145514
              },
              genres: [
              "pop punk",
              "punk christmas"
              ],
              href: "https://api.spotify.com/v1/artists/6FBDaR13swtiWwGhX1WQsP",
              id: "6FBDaR13swtiWwGhX1WQsP",
              images: [
              {},
              {
                height: 393,
                url: "https://i.scdn.co/image/4a9bcfa673ca292086abc9d9dc635acde34c2167",
                width: 640
              },
              {
                height: 123,
                url: "https://i.scdn.co/image/753c3d7324e903f81a907a7003eab12afe2a3f77",
                width: 200
              },
              {
                height: 39,
                url: "https://i.scdn.co/image/42f112f0b47cbd309263c738910229bc3e997b73",
                width: 64
              }
            ],
                name: "blink-182",
                popularity: 75,
                type: "artist",
                uri: "spotify:artist:6FBDaR13swtiWwGhX1WQsP"
          },
          {
              external_urls: {
              spotify: "https://open.spotify.com/artist/1fPVbdoiKq0c6BrlD2HrML"
              },
              followers: {
              href: null,
              total: 188
              },
              genres: [ ],
              href: "https://api.spotify.com/v1/artists/1fPVbdoiKq0c6BrlD2HrML",
              id: "1fPVbdoiKq0c6BrlD2HrML",
              images: [
              {
              height: 640,
              url: "https://i.scdn.co/image/6c051fe5b0bce54004310de4a491592b9e88a7e4",
              width: 640
              },
              {
              height: 300,
              url: "https://i.scdn.co/image/12be1d93f789ef064e44c26bac9b248ca8419e8a",
              width: 300
              },
              {
              height: 64,
              url: "https://i.scdn.co/image/3f04990f0e86d2b30fc20d2d72cb033e22d2a95a",
              width: 64
              }
              ],
              name: "A Tribute to Blink 182 Vol.1",
              popularity: 0,
              type: "artist",
              uri: "spotify:artist:1fPVbdoiKq0c6BrlD2HrML"
          }
        ]
      });
  }));

  // Spotify search() test
  it("getRelatedArtists() should return an array of all related artists", function() {
    artistsInfo.getRelatedArtists().then(function(data) {
      expect(data.length).toEqual(2);
    });
  });

}); // end of describe for app service
