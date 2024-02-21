#!/usr/bin/python3
"""  """
from flask import Blueprint
from models.course_model import Course
from flask import jsonify

categories_views = Blueprint('categories', __name__)


@categories_views.route('/categories', methods=['GET'])
def get_categories():
    """ Retrieve all categories """
    # You would typically have a method in your Course model to get all unique categories
    # For the sake of this example, let's assume you have a method called get_all_categories
    course = Course()
    categories = course.get_all_categories()
    return jsonify({'Categories': categories})


@categories_views.route('/categories/<string:category>', methods=['GET'])
def get_courses_by_category(category):
    """ Retreive Courses within the given category """
    course = Course()
    courses = course.get_courses(category)
    return jsonify({'Courses': courses})
