export default class Card {
    constructor(abstract, url, img) {
        this.abstract = abstract;
        this.url = url;
        this.img = img;
    }
    create(section){
        section.append('<li class="card" style="background-image: url(' + this.img + ');' + this.id + '"><a href="' + this.url + '" target="_blank"></a><figcaption>' + this.abstract + '</figcaption></li>');
    }
  }