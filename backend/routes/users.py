#!/usr/bin/python3
"""  """
from flask import Blueprint, request, jsonify, session
from models.user_model import User
from flask_login import login_user, logout_user, login_required, current_user
from utils.database import get_db
from bson import ObjectId


users_views = Blueprint('users', __name__)


@users_views.route('/signup', methods=['POST'])
def signup_user():
    """ Register a new user """
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Connect Database
    db = get_db()
    collection = db['users']

    if collection.count_documents({'username': username}):
        return jsonify({'message': 'Username already exits'}), 400

    if collection.count_documents({'email': email}):
        return jsonify({'message': 'Email already exits'}), 400

    if username and password and email:
        """ hashed_pass = User.hash_password(password).decode() """
        """ user = User(username, hashed_pass, email) """
        try:
            # Temporarily pass the plaintext password
            user = User(username, password, email)
            # actually hash the password
            user.set_password(password)
            user.create()

            login_user(user, remember=True)
            return jsonify({'message': 'User registered successfully'}), 200
        except Exception as e:
            return jsonify({'message': f'Exception Error: {str(e)}'})
    else:
        return jsonify({'message': 'Missing username, password, or email'}), 400


@users_views.route('/signin', methods=['POST', 'GET'])
def signin_user():
    """ SignIn a user """
    if current_user.is_authenticated:
        return jsonify({'message': 'User authenticated'})
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        # Validate Input
        if not username or not password:
            return jsonify({'message': 'Username and password should not be empty'})

        # Query Database
        db = get_db()
        user_doc = db.users.find_one({'username': username})

        if user_doc:
            # Instantiate a User object with database data
            user = User(user_doc['username'], "", user_doc['email'])
            # Directly assign the hashed password
            user.password = user_doc['password']
            # Check the password using bcrypt
            if user.check_password(password):
                user._id = user_doc['_id']
                user_name = user_doc['username']
                # Log the user in
                login_user(user, remember=True)
                user._id = current_user.get_id()
                return jsonify({'message': 'Logged in successfully', 'username': f'{user_name}', '_id': f'{str(user._id)}'}), 200
            else:
                return jsonify({'message': 'Incorrect Password'}), 400
        else:
            return jsonify({'message': 'User Not found'}), 400
    else:
        return jsonify({'msg': 'test'})


@users_views.route('/logout', methods=['GET'])
@login_required
def logout():
    """ LogOut a user """
    # Clear the session
    session.clear()
    logout_user()
    return jsonify({'message': 'You\'re logged out'})


@users_views.route('/profile', methods=['GET'])
# Make sure the user is logged in
@login_required
def profile():
    """ Retrives the current user's profile """

    if not current_user.is_authenticated:
        return jsonify({'message': 'Please log in first'}), 401
    # Use current_user._id to access the _id directly
    user_id = current_user._id
    username = current_user.username
    email = current_user.email
    profile_img = current_user.profile_image
    return jsonify({'user_id': str(user_id), 'username': username, 'email': email, 'profile_image': profile_img}),  200


@users_views.route('/profile', methods=['PUT'])
@login_required
def update_profile():
    """ Updates the current user's profile """
    if not current_user.is_authenticated:
        return jsonify({'message': 'Please log in first'}),  401

    # Get the request data
    data = request.get_json()

    # Check if data is not empty
    if not data:
        return jsonify({'message': 'No input data provided'}),  400

    # Get the new username, email and password from the request
    new_username = data.get('username')
    new_email = data.get('email')
    new_password = data.get('password')
    new_profile_img = data.get('profile_image')

    # Update the user's username, email and password if they are not None
    if new_username is not None:
        current_user.username = new_username
    if new_email is not None:
        current_user.email = new_email
    if new_password is not None:
        current_user.set_password(new_password)
    if new_profile_img is not None:
        current_user.profile_image = new_profile_img

    # Update the user in the database
    try:
        if current_user.update():
            return jsonify({'message': 'Profile updated successfully'}),   200
        else:
            return jsonify({'message': 'Failed to update profile'}),   500
    except Exception as e:
        # Log the exception and return it in the response
        return jsonify({'message': f'Error updating profile: {str(e)}'}),   500
