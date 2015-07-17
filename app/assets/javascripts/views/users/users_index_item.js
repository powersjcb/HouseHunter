HouseHunter.Views.UsersIndexItem = Backbone.CompositeView.extend({

  template: JST['users/index_item'],

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }


});
