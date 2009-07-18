# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_js-testing_session',
  :secret      => 'e9a6f84ca60093fab20ce4cb66cf1c998c7f398d1db535b9b131d507a34f3a6118ad2cc33684cb4adb9accf8e54ecd52e8867677b1f6503d0ef20460c5cbb024'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
