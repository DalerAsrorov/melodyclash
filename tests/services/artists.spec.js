describe("search genre service", function() {
  var songs, albums, $httpBackend;

  beforeEach(module('app'));
  beforeEach(inject(function($injector) {
    songs = $injector.get('iTunes');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend
      .whenGET('https://itunes.apple.com/search?term=green%20day')
      .respond(200, {
        songs: [
          {
                wrapperType: "track",
                kind: "song",
                artistId: 954266,
                collectionId: 5132837,
                trackId: 5132815,
                artistName: "Green Day",
                collectionName: "International Superhits!",
                trackName: "Good Riddance (Time of Your Life)",
                collectionCensoredName: "International Superhits!",
                trackCensoredName: "Good Riddance (Time of Your Life)",
                artistViewUrl: "https://itunes.apple.com/us/artist/green-day/id954266?uo=4",
                collectionViewUrl: "https://itunes.apple.com/us/album/good-riddance-time-your-life/id5132837?i=5132815&uo=4",
                trackViewUrl: "https://itunes.apple.com/us/album/good-riddance-time-your-life/id5132837?i=5132815&uo=4",
                previewUrl: "http://a202.phobos.apple.com/us/r1000/026/Music3/v4/4f/ee/d4/4feed46c-0d18-a336-f9cd-70653e659520/mzaf_1453921066388761179.plus.aac.p.m4a",
                artworkUrl30: "http://is5.mzstatic.com/image/thumb/Music/v4/48/3d/ad/483dad03-041c-f430-1b5a-f34d8e9cf1a3/source/30x30bb.jpg",
                artworkUrl60: "http://is5.mzstatic.com/image/thumb/Music/v4/48/3d/ad/483dad03-041c-f430-1b5a-f34d8e9cf1a3/source/60x60bb.jpg",
                artworkUrl100: "http://is5.mzstatic.com/image/thumb/Music/v4/48/3d/ad/483dad03-041c-f430-1b5a-f34d8e9cf1a3/source/100x100bb.jpg",
                collectionPrice: 10.99,
                trackPrice: 0.69,
                releaseDate: "2001-10-22T07:00:00Z",
                collectionExplicitness: "explicit",
                trackExplicitness: "explicit",
                discCount: 1,
                discNumber: 1,
                trackCount: 21,
                trackNumber: 15,
                trackTimeMillis: 153467,
                country: "USA",
                currency: "USD",
                primaryGenreName: "Pop",
                contentAdvisoryRating: "Explicit",
                radioStationUrl: "https://itunes.apple.com/station/idra.5132815",
                isStreamable: true
            },
            {
                  wrapperType: "track",
                  kind: "song",
                  artistId: 954266,
                  collectionId: 315611219,
                  trackId: 315611467,
                  artistName: "Green Day",
                  collectionName: "21st Century Breakdown (Deluxe Version)",
                  trackName: "21 Guns",
                  collectionCensoredName: "21st Century Breakdown (Deluxe Version)",
                  trackCensoredName: "21 Guns",
                  artistViewUrl: "https://itunes.apple.com/us/artist/green-day/id954266?uo=4",
                  collectionViewUrl: "https://itunes.apple.com/us/album/21-guns/id315611219?i=315611467&uo=4",
                  trackViewUrl: "https://itunes.apple.com/us/album/21-guns/id315611219?i=315611467&uo=4",
                  previewUrl: "http://a1763.phobos.apple.com/us/r1000/099/Music/4e/2c/27/mzm.knwbnlps.aac.p.m4a",
                  artworkUrl30: "http://is2.mzstatic.com/image/thumb/Music/v4/33/32/e4/3332e463-e13c-3c49-bfcd-d85febd63518/source/30x30bb.jpg",
                  artworkUrl60: "http://is2.mzstatic.com/image/thumb/Music/v4/33/32/e4/3332e463-e13c-3c49-bfcd-d85febd63518/source/60x60bb.jpg",
                  artworkUrl100: "http://is2.mzstatic.com/image/thumb/Music/v4/33/32/e4/3332e463-e13c-3c49-bfcd-d85febd63518/source/100x100bb.jpg",
                  collectionPrice: 14.99,
                  trackPrice: 1.29,
                  releaseDate: "2009-05-15T07:00:00Z",
                  collectionExplicitness: "explicit",
                  trackExplicitness: "notExplicit",
                  discCount: 1,
                  discNumber: 1,
                  trackCount: 20,
                  trackNumber: 16,
                  trackTimeMillis: 321093,
                  country: "USA",
                  currency: "USD",
                  primaryGenreName: "Alternative",
                  radioStationUrl: "https://itunes.apple.com/station/idra.315611467",
                  isStreamable: true
            },
            {
                wrapperType: "track",
                kind: "song",
                artistId: 954266,
                collectionId: 5132583,
                trackId: 5132561,
                artistName: "Green Day",
                collectionName: "Dookie",
                trackName: "When I Come Around",
                collectionCensoredName: "Dookie",
                trackCensoredName: "When I Come Around",
                artistViewUrl: "https://itunes.apple.com/us/artist/green-day/id954266?uo=4",
                collectionViewUrl: "https://itunes.apple.com/us/album/when-i-come-around/id5132583?i=5132561&uo=4",
                trackViewUrl: "https://itunes.apple.com/us/album/when-i-come-around/id5132583?i=5132561&uo=4",
                previewUrl: "http://a167.phobos.apple.com/us/r1000/104/Music/ef/0b/d4/mzm.pdhcssen.aac.p.m4a",
                artworkUrl30: "http://is1.mzstatic.com/image/thumb/Music/v4/1d/b4/e7/1db4e7a0-5060-c921-479f-a2ef519af77b/source/30x30bb.jpg",
                artworkUrl60: "http://is1.mzstatic.com/image/thumb/Music/v4/1d/b4/e7/1db4e7a0-5060-c921-479f-a2ef519af77b/source/60x60bb.jpg",
                artworkUrl100: "http://is1.mzstatic.com/image/thumb/Music/v4/1d/b4/e7/1db4e7a0-5060-c921-479f-a2ef519af77b/source/100x100bb.jpg",
                collectionPrice: 9.99,
                trackPrice: 0.69,
                releaseDate: "1994-01-28T08:00:00Z",
                collectionExplicitness: "explicit",
                trackExplicitness: "notExplicit",
                discCount: 1,
                discNumber: 1,
                trackCount: 15,
                trackNumber: 10,
                trackTimeMillis: 178000,
                country: "USA",
                currency: "USD",
                primaryGenreName: "Alternative",
                radioStationUrl: "https://itunes.apple.com/station/idra.5132561",
                isStreamable: true
            }
        ]
      });
  }));

  // search() test
  it("search() should return an array of all tracks by the artist", function() {
    songs.search().then(function(data) {
      expect(data.length).toEqual(3);
    });
  });

}); // end of describe for app service
