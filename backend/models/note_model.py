#!/usr/bin/python3
"""  """
from bson import ObjectId
from .base_model import BaseModel


class Note(BaseModel):
    """  """

    def __init__(self, user, course, note):
        """  """
        super().__init__()
        self.user = {
            '$ref': 'users',
            '$id': user._id,
            '$db': 'atlas_db'
        }
        self.course = {
            '$ref': 'course',
            '$id': course._id,
            'db': 'atlas_db'
        }
        self.note = note
        # Represent MongoDB collection 'notes' to the class
        self.collection = self.get_collection()

    @classmethod
    def read_by_user(cls, user_id):
        """ Retrieve notes by a specific user """
        collection = cls.get_collection()
        return collection.find({'user_id': ObjectId(user_id)})
