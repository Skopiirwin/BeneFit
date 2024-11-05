class ClothingItem < ApplicationRecord
    validates :name, presence: true
    validates :category, presence: true
    validates :size_chart, presence: true
  
    def recommend_size(user_measurement)
      size_chart.each do |size, measurements|
        if fits?(measurements, user_measurement)
          return size
        end
      end
      "No suitable size found"
    end
  
    private
  
    def fits?(item_measurements, user_measurement)
      item_measurements.all? do |part, range|
        user_value = user_measurement.send(part)
        user_value >= range.first && user_value <= range.last
      end
    end
  end