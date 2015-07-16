window.HouseHunter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function () {
    window.router = new HouseHunter.Routers.Router({
      $rootEl: $('#content')
    });
    Backbone.history.start();
  }
};
