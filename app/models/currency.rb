class Currency < ApplicationRecord
  API_URL = ENV['API_BASE_URL']

  # Calculate the value based off the assets current price and the amount owned
  # @param amount [String] the amount a user owns
  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end

  # Get the current price for a given currency.
  def current_price
    response = HTTParty.get(url)&.parsed_response

    return unless response

    response.dig('data', 'attributes', 'current_price')
  end

  # Structure the api endpoint for our request to get the current price.
  def url
    "#{API_URL}/api/v1/currencies/#{self.name.parameterize}"
  end
end
