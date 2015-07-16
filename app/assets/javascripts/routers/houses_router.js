HouseHunter.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'root',
    'users/:id': 'showUser'
  },

  root: function () {
    // Get users to be selected from
    // Shows form to fill out information about current user, optionally persist
    // Enter information about house, optionally enter zillow url and parse
    //   with zillow API

    var users = new HouseHunter.Collections.Users();
    users.fetch();


  },

  showUser: function (id) {
    // show information about user and houses that they can afford from list
    // sort by affordability, sort by overall price

    // include subview with watched houses
  },

  _swapView: function (newView) {
    if (this._currentView) {
      // recursively removes subviews and listeners, prevents zombie views
      this._currentView.remove();
    }
    this._currentView = newView;
    this.$rootEl.html(view.$el);
    newView.render();
  }



});
