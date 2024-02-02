#!/usr/bin/python3
"""  """
from flask import Flask, session
from api.categories import categories_views
from api.courses import courses_views
from api.users import users_views
from api.notes import notes_views
from api.favorites import notes_views

app = Flask(__name__)
app.secret_key = 'secretkey@tlasDev'

app.register_blueprint(categories_views)
app.register_blueprint(courses_views)
app.register_blueprint(users_views)
app.register_blueprint(notes_views)
app.register_blueprint(users_views)


