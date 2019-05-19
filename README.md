# Cryptocurrency Portfolio Calculator

A simple cryptocurrency portfolio calculator built with react and ruby on rails.

![Image of Cryptocurrency Portfolio Calculator](https://github.com/zayneio/cryptocurrency-calculator/blob/master/app/assets/crypto-calculator.png)

Run it locally:
* Create the database:
`rails db:create`
* Create a currency model
`rails g model Currency name max_supply:bigint currency_symbol slug`
* Migrate 
`rails db:migrate`
* Seed the database
`rails db:seed`
* Start your rails server
`rails s`
* => localhost:3000
