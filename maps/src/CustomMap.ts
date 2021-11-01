export class CustomMap { // public as default modifier doesn't need to be initiated
  private googleMap: google.maps.Map; // But we want it private

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }
}
