class CreateTaskTable < ActiveRecord::Migration
  def change
    create_table :task_tables do |t|
      t.string :title
      t.string :description
      t.timestamps
    end
  end
end
