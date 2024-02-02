#!/usr/bin/python3
"""  """
from flask import Blueprint

categories_views = Blueprint('categories', __name__)


@categories_views.route('/categories', methods=['GET'])
def get_categories():
    """ Retrieve all categories """
    pass


@categories_views.route('/categories/<string:id>', methods=['GET'])
def get_courses_by_category():
    """ Retreive Courses within the given category """
    pass
