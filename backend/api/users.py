#!/usr/bin/python3
"""  """
from flask import Blueprint, request, redirect, url_for, flash
from models.user_model import User

users_views = Blueprint('users', __name__)


@users_views.route('/signup', methods=['POST'])
def signup_user():
    """ Register a new user """
    pass


@users_views.route('/signin', methods=['POST'])
def signin_user():
    """ SignIn a user """
    username = request.form.get('username')
    password = request.form.get('password')
    user = User.read(username)
    if user and user.password == User.hash_password(password):
        session['user_id'] = str(user._id)
        flash('Logged successfully')
        redirect(url_for('profile'))
    else:
        flash('Invalid username or password')
        return redirect(url_for('login'))



@users_views.route('/logout', methods=['GET'])
def logout_user():
    """ LogOut a user """
    session.pop('user_id', None)
    flash('Logged Out successfully')
    return redirect(url_for('index'))

@users_views.route('/profile/<string:username>', methods=['GET'])
def get_profile_info(username):
    """ Retrives user Info """
    pass


@users_views.route('/profile/<string:username>', methods=['PUT'])
def update_profile_info(username):
    """ Update user Info """
    pass
