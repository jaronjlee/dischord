class ChangeUserServersName < ActiveRecord::Migration[5.2]
  def change
    rename_table :user_servers, :memberships
  end
end
