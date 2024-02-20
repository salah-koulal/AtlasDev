#!/usr/bin/python3
"""  """
from .base_model import BaseModel
from flask_login import UserMixin
from flask_bcrypt import generate_password_hash, check_password_hash
from bson import ObjectId


class User(BaseModel, UserMixin):
    """ User model inherits from BaseModel """
    """ collection = BaseModel.get_collection() """

    def __init__(self, username, password, email, profile_image, is_hashed=False):
        """ Initialize the User object with a username, hashed password, and email """
        super().__init__()
        self.username = username
        if is_hashed:
            self.password = password
        else:
            self.set_password(password)
        self.email = email
        self.profile_image = profile_image
        # Represent MongoDB collection 'users' to the class
        self.collection = self.get_collection()
        #  is_active attribute, which is expected by Flask-Login
        # self.is_active = True

    def set_password(self, password):
        """ hash password using bcrypt hash (with salt) """
        if password:
            self.password = generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        """ check hash_password with input password """
        result = check_password_hash(self.password, password.encode('utf-8'))
        return result

    def to_dict(self):
        """ Return a BSON-serializable dictionary of the object's data """
        data = {
            '_id': self._id,
            'username': self.username,
            'password': self.password,
            'email': self.email,
            'profile_image': self.profile_image
        }
        return data

    @property
    def is_authenticated(self):
        """Return True if the user is authenticated, i.e., they have provided valid credentials."""
        return True

    @property
    def is_active(self):
        """Return True if this is an active user, in addition to being authenticated."""
        return True

    @property
    def is_anonymous(self):
        """Return True if the current user is anonymous."""
        return False

    def get_id(self):
        """Return user _id as string to satisfy Flask-Login's requirements"""
        return str(self._id)
