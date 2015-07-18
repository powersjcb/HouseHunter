HouseHunter.Views.AppView = Backbone.CompositeView.extend({
  template: JST['app/app'],

  events: {
    // ***should refactor event listeners to here***
  },

  initialize: function (options) {
    this.users = options.users;

    var baseValue = {value: 0};
    this.incomeInput = baseValue;
    this.debtInput = baseValue;
    this.downpaymentInput = baseValue;
  },

  addUsersIndex: function () {
    var subView = new HouseHunter.Views.UsersIndex({
      collection: this.users
    });
    this.addSubview('#users-index', subView);
  },

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
      this.zillowFetch();
    }.bind(this));

    this.incomeInput.addEventListener('change', function (event) {
      this.incomeSlider.noUiSlider.set(event.target.value);
      this.zillowFetch();
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
      this.zillowFetch();
    }.bind(this));

    this.debtInput.addEventListener('change', function (event) {
      this.debtSlider.noUiSlider.set(event.target.value);
      this.zillowFetch();
    }.bind(this));

    // down-payment slider
    this.downpaymentSlider = document.getElementById('downpayment-slider');
    this.downpaymentInput = document.getElementById('downpayment-input');
    noUiSlider.create(this.downpaymentSlider, {
      start: 20000,
      step: 5000,
      range: {
        min: 0,
        max: 1000000
      },
    });

    this.downpaymentSlider.noUiSlider.on('update', function (values, handle) {
      this.downpaymentInput.value = Math.round(values[handle] / 5000) * 5000;
      this.zillowFetch();
    }.bind(this));

    this.downpaymentInput.addEventListener('change', function (event) {
      this.downpaymentSlider.noUiSlider.set(event.target.value);
      this.zillowFetch();
    }.bind(this));
  },

  zillowFetch: _.throttle(function () {
    $.ajax({
      url: '/api/mortgage_proxy',
      data: {
        'zws-id': window.ZWSID,
        'annualincome': this.incomeInput.value,
        'monthlydebts': this.debtInput.value,
        'downpayment' : this.downpaymentInput.value
      },
      success: this.fillResults
    });
  }, 200, this),


  fillResults: function (response) {
    var result = response.affordabilitydetails.response;
    var homeValue = result.affordabilityamount;
    var totalMonthly = result.totalmonthlypayment;

    if (homeValue > 0) {
      $('#monthly-payment').text(totalMonthly);
      $('#house-value').text(homeValue);
      $('.monthly-payment').removeClass('alert alert-danger');
      $('.house-value').removeClass('alert alert-danger');
    } else {
      $('#monthly-payment').text("Pay down debts, increase income");
      $('#house-value').text("Pay down debts, increase income");
      $('.monthly-payment').addClass('alert alert-danger');
      $('.house-value').addClass('alert alert-danger');
    }
  },

  onRender: function () {
    this.addSliders();
    this.addUsersIndex();
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
