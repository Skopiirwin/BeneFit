# spec/factories/accessory_measurements.rb
FactoryBot.define do
  factory :accessory_measurement do
    user
    height { 170.5 }
    weight { 70.2 }
    wrist_circumference { 16.5 }
    wrist_width { 5.8 }
    measurement_type { 'accessory' }

    trait :small_wrist do
      wrist_circumference { 14.0 }
      wrist_width { 4.5 }
    end

    trait :large_wrist do
      wrist_circumference { 19.0 }
      wrist_width { 7.0 }
    end
  end
end