HouseHunter.Views.AppView = Backbone.CompositeView.extend({
  template: JST['app/app'],

  initialize: function (options) {
    this.users = options.users;
    // TODO: add user list subview
    // this.listenToOnce(this.users, 'sync', this.addUsersIndex);
  },

  // TODO: create addUsersIndex dropdown


  addSliders: function () {
    this.incomeSlider = document.getElementById('income-slider');
    this.incomeInput = document.getElementById('income-input');
    noUiSlider.create(this.incomeSlider, {
      start: 55000,
      step: 5000,
      range: {
        min: 35000,
        max: 200000
      },
      // scale: 'logarithmic',
    });

    this.incomeSlider.noUiSlider.on('update', function (values, handle) {
      this.incomeInput.value = values[handle];
    }.bind(this));

    this.incomeInput.addEventListener('change', function () {
      slider.noUiSlider.set([null, this.value]);
    });

  },

  onRender: function () {
    this.addSliders();
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  // on remove function will call .off on slider listeners and then call super
  // preventing orphan listeners
});
