describe("search albums service", function() {
  var albums, $httpBackend;

  beforeEach(module('app'));
  beforeEach(inject(function($injector) {
    albums = $injector.get('iTunes');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend
      .whenGET('https://itunes.apple.com/search?term=sum%2041&entity=album')
      .respond(200, {
        albums: [
        {
            wrapperType: "collection",
            collectionType: "Album",
            artistId: 249591,
            collectionId: 267941,
            amgArtistId: 435172,
            artistName: "Sum 41",
            collectionName: "All Killer No Filler",
            collectionCensoredName: "All Killer No Filler",
            artistViewUrl: "https://itunes.apple.com/us/artist/sum-41/id249591?uo=4",
            collectionViewUrl: "https://itunes.apple.com/us/album/all-killer-no-filler/id267941?uo=4",
            artworkUrl60: "http://is5.mzstatic.com/image/thumb/Music/v4/e4/cd/57/e4cd571a-337c-a25c-b900-8caaa15ff9b6/source/60x60bb.jpg",
            artworkUrl100: "http://is5.mzstatic.com/image/thumb/Music/v4/e4/cd/57/e4cd571a-337c-a25c-b900-8caaa15ff9b6/source/100x100bb.jpg",
            collectionPrice: 7.99,
            collectionExplicitness: "explicit",
            contentAdvisoryRating: "Explicit",
            trackCount: 13,
            copyright: "℗ 2001 The Island Def Jam Music Group",
            country: "USA",
            currency: "USD",
            releaseDate: "2001-05-08T07:00:00Z",
            primaryGenreName: "Alternative"
          },
          {
            wrapperType: "collection",
            collectionType: "Album",
            artistId: 249591,
            collectionId: 25198004,
            amgArtistId: 435172,
            artistName: "Sum 41",
            collectionName: "Chuck",
            collectionCensoredName: "Chuck",
            artistViewUrl: "https://itunes.apple.com/us/artist/sum-41/id249591?uo=4",
            collectionViewUrl: "https://itunes.apple.com/us/album/chuck/id25198004?uo=4",
            artworkUrl60: "http://is2.mzstatic.com/image/thumb/Music/v4/7b/bf/69/7bbf695c-ab1e-ae95-7169-698a83d7be8a/source/60x60bb.jpg",
            artworkUrl100: "http://is2.mzstatic.com/image/thumb/Music/v4/7b/bf/69/7bbf695c-ab1e-ae95-7169-698a83d7be8a/source/100x100bb.jpg",
            collectionPrice: 7.99,
            collectionExplicitness: "notExplicit",
            trackCount: 13,
            copyright: "℗ 2004 The Island Def Jam Music Group",
            country: "USA",
            currency: "USD",
            releaseDate: "2004-10-12T07:00:00Z",
            primaryGenreName: "Rock"
          }
        ]
      });
  }));

  // search() test
  it("getAlbums() should return an array of all albums by the artist", function() {
    albums.getAlbums().then(function(data) {
      expect(data.length).toEqual(2);
    });
  });

}); // end of describe for app service
