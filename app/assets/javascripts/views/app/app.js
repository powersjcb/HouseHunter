HouseHunter.Views.AppView = Backbone.CompositeView.extend({
  template: JST['app/app'],

  initialize: function (options) {
    this.users = options.users;
    // TODO: add user list subview
    // this.listenToOnce(this.users, 'sync', this.addUsersIndex);
  },

  // TODO: create addUsersIndex dropdown


  addSliders: function () {

    // income slider
    this.incomeSlider = document.getElementById('income-slider');
    this.incomeInput = document.getElementById('income-input');
    noUiSlider.create(this.incomeSlider, {
      start: 55000,
      step: 5000,
      range: {
        min: 25000,
        max: 300000
      },
    });

    this.incomeSlider.noUiSlider.on('update', function (values, handle) {
      this.incomeInput.value = Math.round(values[handle]);
    }.bind(this));

    this.incomeInput.addEventListener('change', function (event) {
      this.incomeSlider.noUiSlider.set(event.target.value);
    }.bind(this));

    // debt slider
    this.debtSlider = document.getElementById('debt-slider');
    this.debtInput = document.getElementById('debt-input');
    noUiSlider.create(this.debtSlider, {
      start: 0,
      step: 100,
      range: {
        min: 0,
        max: 5000
      },
    });

    this.debtSlider.noUiSlider.on('update', function (values, handle) {
      this.debtInput.value = Math.round(values[handle]);
    }.bind(this));

    this.debtInput.addEventListener('change', function (event) {
      this.debtSlider.noUiSlider.set(event.target.value);
    }.bind(this));

    // down-payment slider
    this.downpaymentSlider = document.getElementById('downpayment-slider');
    this.downpaymentInput = document.getElementById('downpayment-input');
    noUiSlider.create(this.downpaymentSlider, {
      start: 20,
      step: 0.1,
      range: {
        min: 0,
        max: 50
      },
    });

    this.downpaymentSlider.noUiSlider.on('update', function (values, handle) {
      this.downpaymentInput.value = Math.round(values[handle] * 10) / 10;
    }.bind(this));

    this.downpaymentInput.addEventListener('change', function (event) {
      this.downpaymentSlider.noUiSlider.set(event.target.value);
    }.bind(this));



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
