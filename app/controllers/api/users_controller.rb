class Api::UsersController < Api::ApiController

  def create
    @user = User.new(user_params)
    if @user.save
      ## this is normally bad if you have a password_digest on the user model
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end


  # more about showing the user's houses
  def show
    @user = User.includes(:watched_houses).find(params[:id])
    render json: { user: @user, watched_houses: @user.watched_houses }
  end

  def index
    @users = User.all
    render json: @users
  end

  private
  def user_params
    params
      .require(:user)
      .permit(:name, :income, :monthly_debts,:other_expenses)
  end
end
