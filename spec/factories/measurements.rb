# spec/factories/measurements.rb
FactoryBot.define do
  factory :measurement do
    user
    height { 170.5 }
    weight { 70.2 }
    measurement_type { 'clothing' }

    trait :with_clothing_measurements do
      chest { 95.5 }
      waist { 81.3 }
      hips { 98.7 }
      inseam { 76.2 }
    end
  end
end