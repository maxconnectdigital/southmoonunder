$(document).ready(function() {
  StoreFront.cartReady(function() {
    var storeSelector = document.querySelector('span#cphContent_StoreSelector1_CtaMessage')

    if (storeSelector) {

      if (storeSelector.innerText.startsWith('Your current')) {


        var segments = storeSelector.innerText.split('. ')

        var currentStore = segments[0]
          .replace('Your current pickup location is', '')
          .trim()
          .toLowerCase()

        var textString = 'Your selected store: <span style="font-weight: bold; text-transform: capitalize">' + currentStore + '</span> <span style="text-decoration: underline; margin-left: 7px;">Change Store</span>'

        storeSelector.innerHTML = textString
      } else {
        storeSelector.innerHTML = 'Select a location to see Pick Up In Store availability. <span style="text-decoration:underline;font-weight:bold;margin-left:7px">Select Store</span>'
      }

    }
  })
})
