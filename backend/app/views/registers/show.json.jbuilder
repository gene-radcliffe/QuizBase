json.user do
  json.id @user.id
  json.name @user.name
  json.admin @user.admin
  json.token @user.api_token
end
 