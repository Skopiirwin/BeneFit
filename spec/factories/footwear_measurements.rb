# spec/factories/footwear_measurements.rb
FactoryBot.define do
  factory :footwear_measurement do
    user
    height { 170.5 }
    weight { 70.2 }
    foot_length { 26.5 }
    foot_width { 9.8 }
    arch_height { 3.2 }
    arch_type { 'medium' }
    measurement_type { 'footwear' }

    trait :high_arch do
      arch_type { 'high' }
      arch_height { 4.0 }
    end

    trait :low_arch do
      arch_type { 'low' }
      arch_height { 2.0 }
    end
  end
end