#!/usr/bin/python3
"""  """
from flask import Blueprint, jsonify
from models.course_model import Course

courses_views = Blueprint('courses', __name__)


@courses_views.route('/courses/<category>', methods=['GET'])
def get_courses(category):
    """ Retrieve all courses per category """
    course = Course()
    courses_cat = course.get_courses(category)
    return jsonify({'courses': courses_cat})
