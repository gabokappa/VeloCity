class ApplicationController < ActionController::Base
  # TODO might need to change Base above to API
  include Authenticable
  protect_from_forgery with: :null_session
end
