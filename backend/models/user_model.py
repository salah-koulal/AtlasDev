#!/usr/bin/python3
"""  """
from base_model import BaseModel
import hashlib
from re import match


class User(BaseModel):
    """ User model inherits from BaseModel """

    def __init__(self, username, password, email):
        """ Initialize the User object """
        super().__init__()
        self.username = username
        self.password = self.hash_password(password)
        self.email = email
        # Call the validate method after initializing attributes
        self.validate()
        # Represent MongoDB collection 'users' to the class
        self.collection = self.get_collection()

    @staticmethod
    def hash_password(password):
        """ Hash the password """
        hash_password = hashlib.sha256(password.encode('utf-8')).hexdigest()
        return hash_password


    def validate(self):
        """ Validate the User object """
        if not self.username:
            raise ValueError('Username Can\'t be empty')
        if not self.email:
            raise ValueError('Email can\'t be empty')
        if not match(r"[^@]+@[^@]+\.[^@]+", self.email):
            raise ValueError('Invalid email address')
