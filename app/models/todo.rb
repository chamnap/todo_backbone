class Todo < ActiveRecord::Base
  attr_accessible :name, :state
  validates_presence_of :name
end
