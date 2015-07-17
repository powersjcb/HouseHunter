HouseHunter.Views.UsersIndex = Backbone.CompositeView.extend({

  template: JST['users/index'],

  className: 'row',

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addUserItemView);
  },

  addUserItemView: function (model) {
    var subView = new HouseHunter.Views.UsersIndexItem({
      model: model
    });
    this.addSubview('#users-list', subView);
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }


});
