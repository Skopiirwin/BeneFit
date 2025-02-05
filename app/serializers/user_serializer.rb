# app/serializers/user_serializer.rb
class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :created_at

  def created_at
    object.created_at&.iso8601
  end
end