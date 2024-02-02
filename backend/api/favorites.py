#!/usr/bin/python3
"""  """
from flask import Blueprint

favorites_views = Blueprint('favorites', __name__)


@favorites_views.route('/favorites/', methods=['GET'])
def get_favories_for_user():
    """ Retrieve all favorites for a user """
    pass


@favorites_views.route('/favorites/<string:course_id>', methods=['POST'])
def add_favorite_course(course_id):
    """ Add a course to a user’s favorites """
    pass


@favorites_views.route('/favorites/<string:course_id>', methods=['DELETE'])
def delete_favorite_course(course_id):
    """ Remove a course from a user's favorites """
    pass
