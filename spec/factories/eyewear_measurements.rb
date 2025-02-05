# spec/factories/eyewear_measurements.rb
FactoryBot.define do
  factory :eyewear_measurement do
    user
    height { 170.5 }
    weight { 70.2 }
    face_width { 14.2 }
    temple_length { 13.8 }
    bridge_width { 2.3 }
    face_shape { 'oval' }
    measurement_type { 'eyewear' }

    trait :round_face do
      face_shape { 'round' }
    end

    trait :square_face do
      face_shape { 'square' }
    end
  end
end
