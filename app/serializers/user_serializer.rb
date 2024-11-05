class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :created_at, :provider, :uid

  def created_at
    object.created_at.iso8601 if object.created_at
  end
end