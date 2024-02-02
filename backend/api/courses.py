#!/usr/bin/python3
"""  """
from flask import Blueprint

courses_views = Blueprint('courses', __name__)


@courses_views.route('/courses', methods=['GET'])
def get_courses():
    """ Retrieve all courses """
    pass


@courses_views.route('/courses/<string:id>', methods=['GET'])
def get_course_by_id():
    """ Retrieve course by id given """
    pass
