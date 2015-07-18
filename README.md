# Mortgage Affordability with Zillow API
### Features
- Updates mortgage affordability using ajax requests to rails server on 250ms `setTimeout`.
- Used noUiSliders to add interactivity to the page.

[Live Page](https://fringuante-choucroute-9465.herokuapp.com/)

Backbone views and model could easily be extended to have users create/view houses and their affordability. (given some more time)

[Zillow API Proxy Service](/services/affordability_service.rb)

Originally expected this to be a client accessible API. Built proxy client to handle responses for client through my server using HttParty.

[Specs for API Controller](/spec/api/mortgage_proxy_controller_spec.rb)

Tests that API is returning correct format, tests for expected response format from Zillow.
