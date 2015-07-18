HouseHunter.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'root',
    'users/:id': 'showUser'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  root: function () {
    // Get users to be selected from
    // Shows form to fill out information about current user, optionally persist
    // Enter information about house, optionally enter zillow url and parse
    //   with zillow API

    var users = new HouseHunter.Collections.Users();
    // users.fetch();
    var appView = new HouseHunter.Views.AppView({
      users: users
    });

    this._swapView(appView);
  },

  showUser: function (id) {
    // show information about user and houses that they can afford from list
    // sort by affordability, sort by overall price

    // include subview with watched houses
  },

  _swapView: function (view) {
    if (this._currentView) {
      // removes subviews and listeners, preventing zombie views
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }



});
