#!/usr/bin/python3
"""  """
from flask import Blueprint, jsonify, request
from models.course_model import Course

courses_views = Blueprint('courses', __name__)


@courses_views.route('/courses/<category>', methods=['GET'])
def get_courses(category):
    """ Retrieve all courses per category """
    course = Course()
    courses_cat = course.get_courses(category)
    return jsonify({'courses': courses_cat})

@courses_views.route('/search', methods=['GET'])
def search_course():
    """Search about course by name"""
    name = request.args.get('name', '')
    if name=="":
        courses=[]
        return jsonify({'result':courses})
    course = Course()
    courses = course.get_cources_search(name)
    return jsonify({'result':courses})
