#!/usr/bin/python3
"""  """
from flask import Blueprint, jsonify
from models.favorites_model import Favorite
from flask_login import login_required, current_user
from utils.database import get_db
from bson import ObjectId

favorites_views = Blueprint('favorites', __name__)


@favorites_views.route('/favorites/<user_id>', methods=['GET'])
@login_required
def get_favories_for_user(user_id):
    """ Retrieve all favorites for a user """
    # Debugging print: print(f"Received user_id: {user_id}")
    # Ensure the current user is one requesting their favorites
    if current_user._id != ObjectId(user_id):
        return jsonify({'message': 'Unauthorized'}),  401

    # Create an instance of the Favorite model
    favorite = Favorite(current_user, None)

    # Use get_courses_by_user to retrieve the favorite courses
    favorite_courses = favorite.get_courses_by_user(user_id)

    return jsonify({'lists of favorite courses': favorite_courses}),  200


@favorites_views.route('/favorites/<string:course_id>', methods=['POST'])
@login_required
def add_favorite_course(course_id):
    """ Add a course to a user’s favorites """
    # Create an instance of the Favorite model
    favorite = Favorite(current_user, None)

    try:
        # Use insert_favorite method to add the course to the user's favorites
        message = favorite.insert_favorite(course_id)
        return jsonify({'message': message}), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 400


@favorites_views.route('/favorites/<string:course_id>', methods=['DELETE'])
@login_required
def delete_favorite_course(course_id):
    """ Remove a course from a user's favorites """
    # Create an instance of the Favorite model
    favorite = Favorite(current_user, None)

    try:
        # Use the delete method to remove the course from the user's favorites
        favorite.delete_favorite(course_id)
        return jsonify({'message': 'Course removed from favorites'}), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 400
